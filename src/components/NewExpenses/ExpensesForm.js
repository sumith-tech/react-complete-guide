import React, { useState } from "react";
import './ExpensesForm.css'
const ExpensesForm = () => {

    const[enteredtitle, setenteredtitle] = useState('');
    const[enteredAmount, setenteredAmount] = useState('');
    const[enteredDate, setenteredDate] = useState('');


    // const [userInput, setuserInput] = useState({            //multiple state aproach using obj
    //   enteredtitle:'',
    //   enteredAmount:'',
    //   enteredDate:''
    // })


    const titleChangeHandler = (event) =>{
      
      setenteredtitle(event.target.value);

      // setuserInput({                                     //multiple state aproach value change -1 ;
      //   ...userInput,
      //   enteredtitle:event.target.value,
      // });

      // setuserInput((preval)=>{                           //appoch 2
      //   return {...preval,
      //     enteredtitle:event.target.value,
      //   }
      // })
      
      
    }
    const amountChangeHandler = (event) =>{
      setenteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
      setenteredDate(event.target.value);
    }
    const submitEvent = (event) =>{
      event.preventDefault();
      
      const expenseData ={
        expense:enteredtitle,
        amount:enteredAmount,
        date:enteredDate
      }
      console.log(expenseData)
    }

  return (
    <form onSubmit={submitEvent}>
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
