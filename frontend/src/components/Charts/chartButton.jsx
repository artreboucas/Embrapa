import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faTable,
  faLayerGroup,
  faListUl,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const handlePrint = () => {
  window.print();
}
const ChartButton = ({
  showChart,
  viewMode,
  onToggle,
  onChangeViewMode,
}) => {
  return (
    <div className="button-container">
      {showChart && (
        <div className="view-mode-buttons">
          <button
            className={`view-button ${viewMode === "summary" ? "active" : ""}`}
            onClick={() => onChangeViewMode("summary")}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>Visão Geral</span>
          </button>
          <button
            className={`view-button ${viewMode === "detailed" ? "active" : ""}`}
            onClick={() => onChangeViewMode("detailed")}
          >
            <FontAwesomeIcon icon={faListUl} />
            <span>Detalhada</span>
          </button>
        </div>
      )}

      <div className="action-buttons">
        <button className="print-button" onClick={handlePrint}>
          <FontAwesomeIcon icon={faPrint} />
          <span>Imprimir</span>
        </button>
        <button
          className={`toggle-button ${showChart ? "active" : ""}`}
          onClick={onToggle}
        >
          <FontAwesomeIcon icon={showChart ? faTable : faChartBar} />
          <span>{showChart ? "Mostrar Tabelas" : "Mostrar Gráfico"}</span>
        </button>
      </div>
    </div>
  );
};

export default ChartButton;
