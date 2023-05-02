import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "../Expenses/expenseDetails";
function ExpenseItem(props) {
  // useSate will return an Array with two vlaues in it , one is a variable and another one is a function

  const [a, setAmount] = useState(props.amount);
  const clickHandler = (event) => {
    setAmount(100);
    // event.target.parentNode.remove();
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={a}
      />
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
