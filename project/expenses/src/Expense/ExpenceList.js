import React from "react";
import ItemExpense from "./ItemExpense";
import "./ExpenseStyle/ExpenseList.css";
export default function ExpenceList(props) {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  return (
    <ul className="expenses-list">
      {props.items.map((obj) => (
        <ItemExpense key={obj.title} data={obj} />
      ))}
    </ul>
  );
}
