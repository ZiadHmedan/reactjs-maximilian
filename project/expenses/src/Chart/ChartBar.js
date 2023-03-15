import React from "react";
import "./ChartStyle/ChartBar.css";
export default function ChartBar(props) {
  let chartHeight;
  props.maxValue > 0
    ? (chartHeight = Math.round((props.value / props.maxValue) * 100) + "%")
    : (chartHeight = "0%");
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
