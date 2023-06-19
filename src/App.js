import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      item: "books",
      price: 100,
      date: new Date(2023, 5, 22),
      location: "chennai",
    },
    {
      item: "outfit",
      price: 300,
      date: new Date(2023, 5, 16),
      location: "t-nagar",
    },
    {
      item: "bat",
      price: 180,
      date: new Date(2023, 3, 2),
      location: "madvaram",
    },
  ];
  let some = expenses.map((data) => (
    <ExpenseItem
      key={data.item}
      title={data.item}
      amount={data.price}
      date={data.date}
      location={data.location}
    ></ExpenseItem>
  ));
  return <div>{some}</div>;
}

export default App;
