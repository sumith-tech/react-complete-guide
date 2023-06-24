import React, { useState } from "react";
import './ExpensesForm.css'
const ExpensesForm = () => {

    const[enteredtitle, setenteredtitle] = useState('');
    const[enteredAmount, setenteredAmount] = useState('');
    const[enteredDate, setenteredDate] = useState('');


    const titleChangeHandler = (event) =>{
      setenteredtitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
      setenteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
      setenteredDate(event.target.value);
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expenses</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <button type="submit">Add Expenses</button>
    </form>
  );
};

export default ExpensesForm;
