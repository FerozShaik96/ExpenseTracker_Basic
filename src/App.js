import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
      LocationOfExpenditure: "New Orliance ",
    },
    {
      id: "e4",
      title: "Car Repair",
      amount: 450,
      date: new Date(2022, 9, 12),
      LocationOfExpenditure: "New Orliance ",
    },
  ];

  return (
    <div className="App">
      <h1>Hello Bro</h1>
      {expenses.map((expense, key) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
