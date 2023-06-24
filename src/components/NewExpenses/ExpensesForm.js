import React from "react";
import './ExpensesForm.css'
const ExpensesForm = () => {

    const titleChangeHandler = (event) =>{
        console.log(event.target.value)
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
          <input type="number"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"></input>
        </div>
      </div>
      <button type="submit">Add Expenses</button>
    </form>
  );
};

export default ExpensesForm;
