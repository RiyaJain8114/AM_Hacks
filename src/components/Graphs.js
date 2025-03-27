import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import "./Graphs.css";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Disaster Frequency",
      data: [10, 20, 15, 30, 25],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      borderWidth: 2,
      fill: true,
    },
  ],
};

const pieData = {
  labels: ["Floods", "Earthquakes", "Cyclones", "Droughts"],
  datasets: [
    {
      data: [30, 20, 25, 25],
      backgroundColor: ["blue", "red", "green", "orange"],
    },
  ],
};

const Graphs = () => {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="graphs">
      <div className="chart-container">
        <h3>Disaster Frequency Over Time</h3>
        <Line ref={lineChartRef} data={lineData} />
      </div>
      <div className="chart-container">
        <h3>Disaster Types Distribution</h3>
        <Pie ref={pieChartRef} data={pieData} />
      </div>
    </div>
  );
};

export default Graphs;
