import React, {newState, useState} from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData)
  };

  const [AddExpense,setAddExpense] = useState(false);

  const AddExpenseHandler = ()=>{
    setAddExpense(true)
  }
  const cancelExpenseHandler= () =>{
    setAddExpense(false)
  }

  return (
    <div className="new-expense">
      {!AddExpense && <button type="button" onClick={AddExpenseHandler}>Add Expenses</button>}
      {AddExpense && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} oncancelExpense={cancelExpenseHandler}></ExpensesForm>}
    </div>
  );
};
export default NewExpenses;
