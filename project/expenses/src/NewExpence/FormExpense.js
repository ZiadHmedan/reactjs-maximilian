import React, { useState } from "react";
import "./NewExpStyle/FormExpense.css";
export default function FormExpense(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const amountChange = (e) => {
    setAmount(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const Expense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.ondataExpense(Expense);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.ontoggleNewExp}>
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
