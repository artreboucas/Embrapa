import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  preparoAreaData,
  insumosData,
  preparoSoloData,
  servicosData,
} from "../../services/util/simulationData2";
import "../../styles/style.css";
import TableSimulatorTwo from "../../components/tables/table-simulator-two";
import SummaryCards from "../../components/Cards";

export default function Simulacao2() {
  const [hectares, setHectares] = useState(" 1");
  const [plantas, setPlantas] = useState("204 ");
  const [editing, setEditing] = useState(null);
  const [data, setData] = useState({
    preparoArea: preparoAreaData,
    insumos: insumosData,
    preparoSolo: preparoSoloData,
    servicos: servicosData,
  });

  const handlePrint = () => {
    window.print();
  };

  const handleEditStart = (type, index, field) => {
    setEditing({ type, index, field });
  };

  const handleEditChange = (e) => {
    const { value } = e.target;
    const { type, index, field } = editing;

    setData((prev) => {
      const newData = { ...prev };
      newData[type][index][field] =
        field === "qty" ? parseInt(value) || 0 : parseFloat(value) || 0;
      return newData;
    });
  };

  const handleEditBlur = () => {
    setEditing(null);
  };

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.qty * item.unitValue, 0);

  const totalPreparoArea = calculateTotal(data.preparoArea);
  const totalInsumos = calculateTotal(data.insumos);
  const totalPreparoSolo = calculateTotal(data.preparoSolo);
  const totalServicos = calculateTotal(data.servicos);
  const totalConsolidado =
    totalPreparoArea + totalInsumos + totalPreparoSolo + totalServicos;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>
          <FontAwesomeIcon icon="tractor" className="header-icon" />
          Custo de substituição de Copa de Cajueiro - Espaçamento 10m x 10m
        </h1>
      </header>

      <SummaryCards
        hectares={hectares}
        plantas={plantas}
        editing={editing}
        setEditing={setEditing}
        setHectares={setHectares}
        setPlantas={setPlantas}
        consolidatedTotal={totalConsolidado}
      />

      <TableSimulatorTwo
        tableData={data.preparoArea}
        tableType="preparoArea"
        editing={editing}
        handleEditStart={handleEditStart}
        handleEditChange={handleEditChange}
        handleEditBlur={handleEditBlur}
        calculateTotal={calculateTotal}
      />

      <TableSimulatorTwo
        tableData={data.insumos}
        tableType="insumos"
        editing={editing}
        handleEditStart={handleEditStart}
        handleEditChange={handleEditChange}
        handleEditBlur={handleEditBlur}
        calculateTotal={calculateTotal}
      />

      <TableSimulatorTwo
        tableData={data.preparoSolo}
        tableType="preparoSolo"
        editing={editing}
        handleEditStart={handleEditStart}
        handleEditChange={handleEditChange}
        handleEditBlur={handleEditBlur}
        calculateTotal={calculateTotal}
      />

      <TableSimulatorTwo
        tableData={data.servicos}
        tableType="servicos"
        editing={editing}
        handleEditStart={handleEditStart}
        handleEditChange={handleEditChange}
        handleEditBlur={handleEditBlur}
        calculateTotal={calculateTotal}
      />

      <div className="action-buttons">
        <button onClick={handlePrint} className="btn btn-print">
          <FontAwesomeIcon icon="fa-solid fa-print" /> Imprimir
        </button>
      </div>
    </div>
  );
}
