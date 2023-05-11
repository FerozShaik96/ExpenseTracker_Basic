import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpensesDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expensesData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenses={saveExpensesDataHandler} />
    </div>
  );
}
export default NewExpense;
