import React, { useState } from "react";
import FormExpense from "./FormExpense";
import "./NewExpStyle/NewExpense.css";
export default function NewExpense(props) {
  const [toggleNewExp, setToggleNewExp] = useState(true);
  // const [Expence, setExpence] = useState({
  //   title: "babel",
  //   amount: 2,
  //   date: new Date(),
  // });

  const toggleNewExpHandler = () => {
    setToggleNewExp((prev) => !prev);
  };
  const dataExpense = (newExp) => {
    // setExpence(newExp);
    props.onNewExpenseData(newExp);
  };
  // console.log(Expence);
  return (
    <div className="new-expense">
      {toggleNewExp && (
        <button onClick={toggleNewExpHandler}>Add Expense</button>
      )}

      {!toggleNewExp && (
        <FormExpense
          ondataExpense={dataExpense}
          toggleNewExp={toggleNewExp}
          ontoggleNewExp={toggleNewExpHandler}
        />
      )}
    </div>
  );
}
