import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import NewExpense from "../NewExpence/NewExpenses";
import ExpensesChart from "./ExpensesChart";

const Initial_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure: "Austria",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: "Australia",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: "Denmark",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: "Mystic Falls",
  },
  {
    id: "e5",
    title: "Car Repair",
    amount: 450,
    date: new Date(2022, 9, 12),
    LocationOfExpenditure: "New Orliance ",
  },
];
function Expenses(props) {
  const [expenses, setExpenses] = useState(Initial_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // return [expense, ...prevExpenses];
      const finalExpenses = [expense, ...prevExpenses];
      return finalExpenses;
    });
  };
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
        {/* {expenses.map((expense) => {
          return (
            <div key={expense.id}>
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.LocationOfExpenditure}
              ></ExpenseItem>
            </div>
          );
        })} */}
        {/* {expensesContent} */}
      </Card>
    </div>
  );
}
export default Expenses;
