import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../services/util/simulationData2";

export default function SummaryCards({
  hectares,
  plantas,
  editing,
  setEditing,
  setHectares,
  setPlantas,
  consolidatedTotal,
}) {
  return (
    <div className="summary-cards">
      <div className="summary-card">
        <div className="summary-icon">
          <FontAwesomeIcon icon="map-marked-alt" />
        </div>
        <div className="summary-content">
          <span className="summary-label">Área Total</span>
          <div className="summary-value editable">
            Hectares:
            <span onClick={() => setEditing({ type: "hectares" })}>
              {editing?.type === "hectares" ? (
                <input
                  type="number"
                  value={hectares}
                  onChange={(e) => setHectares(e.target.value)}
                  onBlur={() => setEditing(null)}
                  autoFocus
                  className="edit-input"
                  min="0"
                  step="0.1"
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
            <span onClick={() => setEditing({ type: "plantas" })}>
              {editing?.type === "plantas" ? (
                <input
                  type="number"
                  value={plantas}
                  onChange={(e) => setPlantas(e.target.value)}
                  onBlur={() => setEditing(null)}
                  autoFocus
                  className="edit-input"
                  min="0"
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
          <span className="summary-label">Investimento Total</span>
          <span className="summary-value">
            {formatCurrency(consolidatedTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
