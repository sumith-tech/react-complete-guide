import React,{useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const Dummy_expenses = [
  {
    id:'1',
    title: "books",
    amount: 100,
    date: new Date(2023, 5, 22),
    location: "chennai",
  },
  {
    id:'2',
    title: "outfit",
    amount: 300,
    date: new Date(2023, 5, 16),
    location: "t-nagar",
  },
  {
    id:'3',
    title: "bat",
    amount: 180,
    date: new Date(2023, 3, 2),
    location: "madvaram",
  },
  {
    id:'4',
    title: "medicine",
    amount: 410,
    date: new Date(2023, 8, 24),
    location: "kilpauk",
    
  },
  {
    id:'5',
    title: "food",
    amount: 930,
    date: new Date(2023, 8, 26),
    location: "CoalBBq",
  },
];
const App = () => {
  
  const[expenses,setexpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expense)=>{
    console.log(expense)
    setexpenses((preval)=>{
      return [expense,...preval];
    }); 
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
