import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, setEditing] = useState(false);
  const saveExpensesDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expensesData);
    setEditing(false);
  };
  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditinghandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenses={saveExpensesDataHandler}
          onCancel={stopEditinghandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
