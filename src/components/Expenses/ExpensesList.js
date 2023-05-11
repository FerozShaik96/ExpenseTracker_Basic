import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  } else if (props.item.length === 1) {
    return (
      <ul className="expenses-list">
        {props.item.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.LocationOfExpenditure}
            />
          </div>
        ))}
        <h3>Only single Expense here. Please add more..."</h3>
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          />
        </div>
      ))}
    </ul>
  );
};
export default ExpensesList;
