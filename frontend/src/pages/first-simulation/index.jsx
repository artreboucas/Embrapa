import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  formatCurrency,
  preparoSoloData,
  insumosData,
} from "../../services/util/simulationData1";
import "../../styles/style.css";

export default function Simulacao1() {
  const [hectares, setHectares] = useState("1");
  const [plantas, setPlantas] = useState("204");
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

      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-icon">
            <FontAwesomeIcon icon="map-marked-alt" />
          </div>
          <div className="summary-content">
            <span className="summary-label">Área Total</span>
            <div className="summary-value editable">
              {" "}
              Hectares:
              <span
                className="summary-value editable"
                onClick={() => setEditing({ type: "hectares" })}
              >
                {editing?.type === "hectares" ? (
                  <input
                    type="number"
                    value={hectares}
                    onChange={(e) => setHectares(e.target.value)}
                    onBlur={() => setEditing(null)}
                    autoFocus
                    className="edit-input"
                  />
                ) : (
                  hectares
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">
            <FontAwesomeIcon icon="seedling" />
          </div>

          <div className="summary-content">
            <span className="summary-label">Quantidade de Plantas</span>
            <div className="summary-value editable">
              <span
                className="summary-value editable"
                onClick={() => setEditing({ type: "plantas" })}
              >
                {editing?.type === "plantas" ? (
                  <input
                    type="number"
                    value={plantas}
                    onChange={(e) => setPlantas(e.target.value)}
                    onBlur={() => setEditing(null)}
                    autoFocus
                    className="edit-input"
                  />
                ) : (
                  plantas
                )}
              </span>
              unid.
            </div>
          </div>
        </div>

        <div className="summary-card highlight">
          <div className="summary-icon">
            <FontAwesomeIcon icon="calculator" />
          </div>
          <div className="summary-content">
            <span className="summary-label">Investimento </span>
            <span className="summary-value">{formatCurrency(Consolidado)}</span>
          </div>
        </div>
      </div>

      <section className="budget-section">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th className="title">
                  <strong>PREPARO DO SOLO</strong>
                </th>
                <th>Unidade</th>
                <th>Quantidade</th>
                <th>Valor Unitário (R$)</th>
                <th>Valor Total (R$)</th>
              </tr>
            </thead>
            <tbody>
              {data.preparoSolo.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.unit}</td>
                  <td
                    className="editable"
                    onClick={() => handleEditStart("preparoSolo", index, "qty")}
                  >
                    {editing?.type === "preparoSolo" &&
                    editing?.index === index &&
                    editing?.field === "qty" ? (
                      <input
                        type="number"
                        value={item.qty}
                        onChange={handleEditChange}
                        onBlur={handleEditBlur}
                        autoFocus
                        className="edit-input"
                      />
                    ) : (
                      item.qty
                    )}
                  </td>
                  <td>{formatCurrency(item.unitValue)}</td>
                  <td className="valor-total">
                    {formatCurrency(item.qty * item.unitValue)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">SUBTOTAL PREPARO DO SOLO</td>
                <td>{formatCurrency(Preparo)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section className="budget-section">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th className="title">
                  <strong>INSUMOS</strong>
                </th>
                <th>Unidade</th>
                <th>Quantidade</th>
                <th>Valor Unitário (R$)</th>
                <th>Valor Total (R$)</th>
              </tr>
            </thead>
            <tbody>
              {data.insumos.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.unit}</td>
                  <td
                    className="editable"
                    onClick={() => handleEditStart("insumos", index, "qty")}
                  >
                    {editing?.type === "insumos" &&
                    editing?.index === index &&
                    editing?.field === "qty" ? (
                      <input
                        type="number"
                        value={item.qty}
                        onChange={handleEditChange}
                        onBlur={handleEditBlur}
                        autoFocus
                        className="edit-input"
                      />
                    ) : (
                      item.qty
                    )}
                  </td>
                  <td className="valor-uni">{formatCurrency(item.unitValue)}</td>
                  <td className="valor-total">
                    {formatCurrency(item.qty * item.unitValue)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">SUBTOTAL INSUMOS</td>
                <td>{formatCurrency(Insumos)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

        <div class="action-buttons">
            <button class="btn btn-print" onClick={handlePrint}>
                 <FontAwesomeIcon icon="fa-solid fa-print" /> Imprimir
            </button>
        </div>
    </div>
  );
}
