import React from "react";
import "./ExpenseStyle/ItemExpense.css";
import Card from "../Ui/Card";
import DateExpense from "./DateExpense";
export default function ItemExpense(props) {
  return (
    <Card className="expense-item">
      <DateExpense date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
    </Card>
  );
}
