import React, { useState } from "react";
import Card from "../Ui/Card";
import "./ExpenseStyle/Expense.css";
import "./ExpenseStyle/ItemExpense.css";
import FilterExpense from "./FilterExpense";
import ExpenceList from "./ExpenceList";
import ExpenceChart from "./ExpenceChart";
export default function Expence(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterdYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const expenses = props.data.filter(
    (obj) => selectedYear === obj.date.getFullYear().toString()
  );
  return (
    <Card className="expenses">
      <FilterExpense selectedYear={selectedYear} onFilterdYear={filterdYear} />
      <ExpenceChart filteredData = {expenses}/>
      <ExpenceList items={expenses} />
    </Card>
  );
}
