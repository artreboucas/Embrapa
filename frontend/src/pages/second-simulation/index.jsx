import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  formatCurrency,
  preparoAreaData,
  insumosData,
  preparoSoloData,
  servicosData,
} from "../../services/util/simulationData2";
import "../../styles/style.css";

export default function Simulacao2() {
  const [hectares, setHectares] = useState("Hectares: 1");
  const [plantas, setPlantas] = useState("204 unid.");
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

      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-icon">
            <FontAwesomeIcon icon="map-marked-alt" />
          </div>
          <div className="summary-content">
            <span className="summary-label">Área Total</span>
            <span
              className="summary-value editable"
              onClick={() => setEditing({ type: "hectares" })}
            >
              {editing?.type === "hectares" ? (
                <input
                  type="text"
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

        <div className="summary-card">
          <div className="summary-icon">
            <FontAwesomeIcon icon="seedling" />
          </div>
          <div className="summary-content">
            <span className="summary-label">Total de Plantas</span>
            <span
              className="summary-value editable"
              onClick={() => setEditing({ type: "plantas" })}
            >
              {editing?.type === "plantas" ? (
                <input
                  type="text"
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
          </div>
        </div>

        <div className="summary-card highlight">
          <div className="summary-icon">
            <FontAwesomeIcon icon="calculator" />
          </div>
          <div className="summary-content">
            <span className="summary-label">Investimento Total</span>
            <span className="summary-value">
              {formatCurrency(totalConsolidado)}
            </span>
          </div>
        </div>
      </div>

      <section className="budget-section">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th className="title">PREPARO DA ÁREA</th>
                <th>Unidade</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>
                <th>Valor Total (R$)</th>
              </tr>
            </thead>
            <tbody>
              {data.preparoArea.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.unit}</td>
                  <td
                    className="editable"
                    onClick={() => handleEditStart("preparoArea", index, "qty")}
                  >
                    {editing?.type === "preparoArea" &&
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
                <td colSpan="4">SUBTOTAL PREPARO DA ÁREA</td>
                <td>{formatCurrency(totalPreparoArea)}</td>
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
                <th className="title">INSUMOS</th>
                <th>Unidade</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>
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
                  <td>{formatCurrency(item.unitValue)}</td>
                  <td className="valor-total">
                    {formatCurrency(item.qty * item.unitValue)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">SUBTOTAL INSUMOS</td>
                <td>{formatCurrency(totalInsumos)}</td>
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
                <th className="title">PREPARO DO SOLO</th>
                <th>Unidade</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>
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
                <td>{formatCurrency(totalPreparoSolo)}</td>
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
                <th className="title">SERVIÇOS</th>
                <th>Unidade</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>
                <th>Valor Total (R$)</th>
              </tr>
            </thead>
            <tbody>
              {data.servicos.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.unit}</td>
                  <td
                    className="editable"
                    onClick={() => handleEditStart("servicos", index, "qty")}
                  >
                    {editing?.type === "servicos" &&
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
                <td colSpan="4">SUBTOTAL SERVIÇOS</td>
                <td>{formatCurrency(totalServicos)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <div class="action-buttons">
      <button onClick={handlePrint} className="btn btn-print">
        <FontAwesomeIcon icon="fa-solid fa-print"/> Imprimir
        </button>
      </div>
    </div>
  );
}
