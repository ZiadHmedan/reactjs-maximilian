import React, { useState } from "react";
import "./NewExpence/NewExpense";
import "./App.css";
import NewExpense from "./NewExpence/NewExpense";
import Expence from "./Expense/Expence";
export default function App() {
  let dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(dummy_expenses);
  const NewExpenseData = (exp) => {
    setExpenses((prev) => {
      return [exp, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onNewExpenseData={NewExpenseData} />
      <Expence data={expenses} />
    </div>
  );
}
