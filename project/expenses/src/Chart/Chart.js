import React from "react";
import ChartBar from "./ChartBar";
import "./ChartStyle/Chart.css";
export default function Chart(props) {
  const chartDataValues = props.chartData.map((data) => data.value);
  // console.log(chartDataValues);
  const maxValue = Math.max(...chartDataValues);
  return (
    <div className="chart">
      {props.chartData.map((exp) => (
        <ChartBar
          key={exp.label}
          value={exp.value}
          maxValue={maxValue}
          label={exp.label}
        />
      ))}
    </div>
  );
}
