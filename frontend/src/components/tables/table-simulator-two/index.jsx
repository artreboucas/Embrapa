import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../../services/util/simulationData2";

export default function TableSimulatorTwo({
  tableData,
  tableType,
  editing,
  handleEditStart,
  handleEditChange,
  handleEditBlur,
  calculateTotal,
}) {

const getTableTitle = () => {
    switch (tableType) {
      case "preparoArea":
        return "PREPARO DA ÁREA";
      case "preparoSolo":
        return "PREPARO DO SOLO";
      case "servicos":
        return "SERVIÇOS";
      default:
        return "INSUMOS";
    }
  };

  return (
    <section className="budget-section">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th className="title">{getTableTitle()}</th>
              <th>Unidade</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
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
                <td>{formatCurrency(item.unitValue)}</td>
                <td className="valor-total">
                  {formatCurrency(item.qty * item.unitValue)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">SUBTOTAL {getTableTitle()}</td>
              <td>{formatCurrency(calculateTotal(tableData))}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
