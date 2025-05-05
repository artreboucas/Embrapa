import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  preparoSoloData,
  insumosData,
} from "../../services/util/simulationData1";
import "../../styles/style.css";
import TableSimulatorOne from "../../components/tables/table-simulator-one/index";
import SummaryCards from "../../components/Cards/index";

export default function Simulacao1() {
  const [hectares, setHectares] = useState(" 1");
  const [plantas, setPlantas] = useState("204 ");
  const [editing, setEditing] = useState(null);
  const [data, setData] = useState({
    preparoSolo: preparoSoloData,
    insumos: insumosData,
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

  const calculate = (items) =>
    items.reduce((sum, item) => sum + item.qty * item.unitValue, 0);

  const Preparo = calculate(data.preparoSolo);
  const Insumos = calculate(data.insumos);
  const Consolidado = Preparo + Insumos;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>
          <FontAwesomeIcon icon="tractor" className="header-icon" />
          Custo de Implantação de Pomar de Cajueiro-anão - Espaçamento 7m x 7m
        </h1>
      </header>

      <SummaryCards
        hectares={hectares}
        plantas={plantas}
        editing={editing}
        setEditing={setEditing}
        setHectares={setHectares}
        setPlantas={setPlantas}
        consolidatedTotal={Consolidado}
      />

      <TableSimulatorOne
        tableData={data.preparoSolo}
        tableType="preparoSolo"
        editing={editing}
        handleEditStart={handleEditStart}
        handleEditChange={handleEditChange}
        handleEditBlur={handleEditBlur}
        calculateTotal={calculate}
      />

      <TableSimulatorOne
        tableData={data.insumos}
        tableType="insumos"
        editing={editing}
        handleEditStart={handleEditStart}
        handleEditChange={handleEditChange}
        handleEditBlur={handleEditBlur}
        calculateTotal={calculate}
      />

      <div className="action-buttons">
        <button className="btn btn-print" onClick={handlePrint}>
          <FontAwesomeIcon icon="fa-solid fa-print" /> Imprimir
        </button>
      </div>
    </div>
  );
}
