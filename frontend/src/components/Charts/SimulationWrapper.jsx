import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DynamicChart from '../Charts/DynamicChart';
import ChartButton from '../Charts/chartButton';
import SummaryCards from '../Cards/index';
import TableSimulator from '../tables/TableSimulator';

const SimulationWrapper = ({
  simulationType,
  initialData,
  title,
  icon = "tractor",
  columnsConfig
}) => {
  const [hectares, setHectares] = useState(" 1");
  const [plantas, setPlantas] = useState("204 ");
  const [editing, setEditing] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [viewMode, setViewMode] = useState("summary");
  const [data, setData] = useState(initialData);

  const toggleChart = () => setShowChart(!showChart);
  const changeViewMode = (mode) => setViewMode(mode);

  const calculate = (items) => 
    items.reduce((sum, item) => sum + item.qty * item.unitValue, 0);

  const chartData = useMemo(() => {
    const categories = {};
    const summaryValues = [];
    const detailedLabels = [];
    const detailedValues = [];

    Object.keys(data).forEach(key => {
      const items = data[key];
      const total = calculate(items);
      categories[key] = total;
      summaryValues.push(total);

      items.forEach(item => {
        detailedLabels.push(item.item);
        detailedValues.push(item.qty * item.unitValue);
      });
    });

    const total = Object.values(categories).reduce((sum, val) => sum + val, 0);
    summaryValues.push(total);

    return {
      summaryValues,
      detailedLabels,
      detailedValues,
      total
    };
  }, [data]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>
          <FontAwesomeIcon icon={icon} className="header-icon" />
          {title}
        </h1>
      </header>

      <SummaryCards
        hectares={hectares}
        plantas={plantas}
        editing={editing}
        setEditing={setEditing}
        setHectares={setHectares}
        setPlantas={setPlantas}
        consolidatedTotal={chartData.total}
      />

        <div className={`tables-section ${showChart ? 'hidden' : ''}`}>
        {Object.keys(data).map((tableType) => (
            <TableSimulator
            key={tableType}
            tableData={data[tableType]}
            tableType={tableType}
            columnsConfig={columnsConfig}
            editing={editing}
            handleEditStart={(type, index, field) =>
                setEditing({ type: tableType, index, field })
            }
            handleEditChange={(e) => {
                const { value } = e.target;
                setData((prev) => ({
                ...prev,
                [tableType]: prev[tableType].map((item, idx) =>
                    idx === editing.index
                    ? { ...item, [editing.field]: parseFloat(value) || 0 }
                    : item
                ),
                }));
            }}
            handleEditBlur={() => setEditing(null)}
            />
        ))}
        </div>

        {showChart && (
        <div className="chart-section">
            <DynamicChart 
            data={chartData} 
            viewMode={viewMode}
            simulationType={simulationType} 
            />
        </div>
        )}

              <div className="action-buttons">
        <ChartButton
          showChart={showChart}
          viewMode={viewMode}
          onToggle={toggleChart}
          onChangeViewMode={changeViewMode}
        />
      </div>
    </div>
  );
};

export default SimulationWrapper;
