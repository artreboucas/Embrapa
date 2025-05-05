import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../../services/util/simulationData1";

export default function TableSimulatorOne({
  tableData,
  tableType,
  editing,
  handleEditStart,
  handleEditChange,
  handleEditBlur,
  calculateTotal,
}) {
  return (
    <section className="budget-section">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th className="title">
                <strong>
                  {tableType === "preparoSolo" ? "PREPARO DO SOLO" : "INSUMOS"}
                </strong>
              </th>
              <th>Unidade</th>
              <th>Quantidade</th>
              <th>Valor Unitário (R$)</th>
              <th>Valor Total (R$)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.unit}</td>
                <td
                  className="editable"
                  onClick={() => handleEditStart(tableType, index, "qty")}
                >
                  {editing?.type === tableType &&
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
              <td colSpan="4">
                SUBTOTAL{" "}
                {tableType === "preparoSolo" ? "PREPARO DO SOLO" : "INSUMOS"}
              </td>
              <td>{formatCurrency(calculateTotal(tableData))}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
