import React from "react";
import "./Card.css";
export default function Card(props) {
  const classes = "card " + props.className;
  const z = 10;
  return <div className={classes}>{props.children}</div>;
}
