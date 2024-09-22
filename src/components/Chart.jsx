import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ interval }) => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  const dataForIntervals = {
    "1d": [63500, 63600, 63750, 63500, 63300],
    "3d": [63000, 64000, 63500],
    "1w": [63000, 64500, 64000, 63500, 64500, 64000, 63179],
    "1m": [62000, 63000, 64000, 64500, 63500],
    "6m": [60000, 63000, 64500, 63500, 65000],
    "1y": [58000, 59000, 61000, 63500, 64000],
    max: [45000, 50000, 55000, 60000, 63000, 64000, 64500, 63500, 63179],
  };

  useEffect(() => {
    if (!dataForIntervals[interval]) return;

    setLoading(true); // Start loading
    setTimeout(() => {
      const labels = Array(dataForIntervals[interval].length).fill(""); // Labels for x-axis
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Price (USD)",
            data: dataForIntervals[interval],
            borderColor: "#4c40ee",
            backgroundColor: (context) => {
              const chart = context.chart;
              const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
              gradient.addColorStop(0, "rgba(76, 64, 238, 0.5)"); // Starting point
              gradient.addColorStop(1, "rgba(76, 64, 238, 0)"); // End point
              return gradient;
            },
            fill: true,
            tension: 0.4, // For smooth line curves
          },
        ],
      });
      setLoading(false); // End loading after setting data
    }, 500); // Simulate data fetching delay
  }, [interval]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true, // Tooltip on hover
        callbacks: {
          label: function (tooltipItem) {
            return `Price: $${tooltipItem.raw}`; // Custom tooltip format
          },
        },
      },
      title: { display: false },
    },
    hover: {
      mode: "nearest", // Show tooltip nearest to the hover point
      intersect: true,
    },
    scales: {
      y: {
        beginAtZero: false, // Avoid starting at zero for financial data
      },
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
    },
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px", // Adjust as per your layout
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!chartData || !chartData.datasets) {
    return (
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        No data available for this interval
      </Box>
    );
  }

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;

