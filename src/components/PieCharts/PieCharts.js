import 'chart.js/auto';
import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import './PieCharts.css';
import worldCup2011Winners from './worldCup2011Data';

const PieCharts = () => {
  useEffect(() => {
    return () => {
      if (window.Chart) {
        window.Chart.helpers.each(window.Chart.instances, (instance) => {
          instance.destroy();
        });
      }
    };
  }, []);

  const handleChartClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const chart = elements[0]._chart;

      if (chart && chart.data) {
        const dataset = chart.data.datasets[0];
        dataset._meta[0].data.forEach((element, i) => {
          element._model.outerRadius = element._model.innerRadius = 0;
        });
        chart.getDatasetMeta(0).data[index].transition(500).model.outerRadius = 10;
        chart.update();
      }
    }
  };

  return (
    <div>
    <center>
      <h1>2023 World Cup Winners - Pie Charts</h1>
      </center>
      <div className="pie-chart-container">
        {worldCup2011Winners.map((player, index) => (
          <div key={index} className="pie-chart">
            <h2>{player["Player Name"]}</h2>
            <Pie
              data={{
                labels: ["Runs", "Wickets"],
                datasets: [{
                  data: [player.Runs, player.Wickets],
                  backgroundColor: ["#36A2EB", "#FF6384"],
                  hoverBackgroundColor: ["#36A2EB", "#FF6384"],
                }]
              }}
              options={{
                onClick: handleChartClick,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;