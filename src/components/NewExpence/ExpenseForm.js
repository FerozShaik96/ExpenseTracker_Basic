import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [entereDate, setEnteredDate] = useState("");
  const [enterLocation, setEnteredLocation] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangehadler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const locationChangehandler = (event) => {
    setEnteredLocation(event.target.value);
  };
  //2nd way of doing

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   entereDate: "",
  // });
  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };
  // const amountChangehadler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     entereDate: event.target.value,
  //   });
  // };

  //3rd way of doing this

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   entereDate: "",
  // });
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  // const amountChangehadler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, entereDate: event.target.value };
  //   });
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenceData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(entereDate),
      LocationOfExpenditure: enterLocation,
    };
    props.onSaveExpenses(ExpenceData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expence__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangehadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-06-01"
            value={entereDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={enterLocation}
            onChange={locationChangehandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
