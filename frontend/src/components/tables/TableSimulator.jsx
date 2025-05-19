import React from 'react';

const FIRST_COLUMN_TITLES = {
  preparoSolo: "PREPARO DO SOLO",
  insumos: "INSUMOS",
  preparoArea: "PREPARO DA ÁREA",
  servicos: "SERVIÇOS"
};

const TableSimulator = ({
  tableData,
  tableType,
  columnsConfig,
  editing,
  handleEditStart,
  handleEditChange,
  handleEditBlur
}) => {
  const columns = columnsConfig[tableType] || [];

  const totalGeral = tableData.reduce((total, row) => {
    return total + (row.qty * row.unitValue);
  }, 0);

  return (
    <div className="table-responsive-container">
      <div className="table-scroll-wrapper">
        <table className="simulator-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={col}>
                  {index === 0 ? FIRST_COLUMN_TITLES[tableType] : 
                   col === 'unit' ? 'UNIDADE' : 
                   col === 'qty' ? 'QUANTIDADE' : 
                   col === 'unitValue' ? 'VALOR UNITÁRIO' : col}
                </th>
              ))}
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map(col => (
                  <td key={col}>
                    {editing?.type === tableType && 
                     editing?.index === rowIndex && 
                     editing?.field === col ? (
                      <input
                        type="number"
                        value={row[col]}
                        onChange={handleEditChange}
                        onBlur={handleEditBlur}
                        autoFocus
                        className="edit-input"
                      />
                    ) : (
                      <span onDoubleClick={() => handleEditStart(tableType, rowIndex, col)}>
                        {col === 'unitValue' ? `R$ ${row[col].toFixed(2)}` : row[col]}
                      </span>
                    )}
                  </td>
                ))}
                <td className="total-col">R$ {(row.qty * row.unitValue).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="total-row">
              <td colSpan={columns.length} className="text-right font-bold">
                SUBTOTAL:
              </td>
              <td className="total-col font-bold">
                R$ {totalGeral.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableSimulator;