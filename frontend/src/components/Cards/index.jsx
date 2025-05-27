import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../services/util/simulationData2";

export default function SummaryCards({
  hectares,
  editing,
  setEditing,
  setHectares,
  consolidatedTotal,
}) {
  const plantas = 204 * hectares;

  return (
    <div className="summary-cards">
      <div className="summary-card">
        <div className="summary-icon">
          <FontAwesomeIcon icon="map-marked-alt" />
        </div>
        <div className="summary-content">
          <span className="summary-label">Área Total</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '17px', fontWeight: '600'}}>
            Hectares:
            <span 
              onClick={() => setEditing({ type: "hectares" })}
              style={{
                padding: '1px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                backgroundColor: editing?.type === "hectares" ? '#f0f7ff' : 'transparent',
                border: editing?.type === "hectares" ? '1px solid #4a90e2' : 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f7ff'}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 
                  editing?.type === "hectares" ? '#f0f7ff' : 'transparent';
              }}
            >
              {editing?.type === "hectares" ? (
                <input
                  type="number"
                  value={hectares}
                  onChange={(e) => setHectares(Math.max(1, parseInt(e.target.value) || 1))}
                  onBlur={() => setEditing(null)}
                  autoFocus
                  style={{
                    border: 'none',
                    background: 'transparent',
                    width: '50px',
                    outline: 'none'
                  }}
                  min="1"
                  step="1"
                />
              ) : (
                hectares.toLocaleString('pt-BR')
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
          <div className="summary-value">
            {plantas.toLocaleString('pt-BR')} unid.
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