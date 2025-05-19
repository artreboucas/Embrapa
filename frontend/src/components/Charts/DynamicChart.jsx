import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DynamicChart = ({ data, viewMode, simulationType }) => {
  const rainbowColors = [
    'rgba(255, 99, 132, 0.7)',
    'rgba(255, 159, 64, 0.7)',
    'rgba(255, 205, 86, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(153, 102, 255, 0.7)',
    'rgba(201, 203, 207, 0.7)'
  ];

  const rainbowBorderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(201, 203, 207, 1)'
  ];

  const labels = viewMode === 'summary' 
    ? simulationType === 1 
      ? ['Preparo Solo', 'Insumos', 'Total']
      : ['Preparo Área', 'Insumos', 'Serviços', 'Total']
    : data.detailedLabels;

  const values = viewMode === 'summary' ? data.summaryValues : data.detailedValues;

  const getColors = (count) => {
    if (viewMode === 'summary') {
      if (simulationType === 1) {
        return {
          bg: [rainbowColors[1], rainbowColors[2], rainbowColors[5]],
          border: [rainbowBorderColors[1], rainbowBorderColors[2], rainbowBorderColors[5]]
        };
      } else {
        return {
          bg: [rainbowColors[1], rainbowColors[2], rainbowColors[3], rainbowColors[5]],
          border: [rainbowBorderColors[1], rainbowBorderColors[2], rainbowBorderColors[3], rainbowBorderColors[5]]
        };
      }
    }
    return {
      bg: rainbowColors.slice(0, count),
      border: rainbowBorderColors.slice(0, count)
    };
  };

  const colors = getColors(values.length);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Custos (R$)',
        data: values,
        backgroundColor: colors.bg,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `R$ ${ctx.raw.toFixed(2)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `R$ ${value}`
        }
      }
    }
  };

  return (
    <div className="chart-responsive-container">
      <div className="chart-scroll-wrapper">
        <div className="chart-wrapper">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DynamicChart;