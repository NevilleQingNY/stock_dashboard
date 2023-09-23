import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ chartData }) => {
  return (
    <>
        <Line 
            data={chartData} 
            options = {{
                scales: { 
                    x: {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            maxRotation:0,
                        }
                    }
                }
            }}
        />
    </>
  );
};

export default LineChart;