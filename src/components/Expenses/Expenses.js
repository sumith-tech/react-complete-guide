import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../Filters/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (changedYear) => {
    setfilteredYear(changedYear);
  };

    const filterYear = props.items.filter(expense =>{
      
      return expense.date.getFullYear().toString() === filteredYear;
    });
    
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filterYear}/>
        <ExpenseList items={filterYear}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
