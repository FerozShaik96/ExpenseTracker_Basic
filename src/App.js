import "./App.css";
import NewExpense from "./components/NewExpence/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses></Expenses>
    </div>
  );
}

export default App;
