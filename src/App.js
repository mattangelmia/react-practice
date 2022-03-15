import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./List";
import { Card } from "react-bootstrap";
import DateFilter from "./DateFilter";

function App() {
  const [selected, setSelected] = useState(2020);
  const [filterValue, setFilterValue] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: 2019,
    },
    { id: "e2", title: "New TV", amount: 799.49, date: 2020 },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: 2020,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: 2021,
    },
  ]);

  function changeDate(e) {
    console.log(typeof e.target.value);

    setFilterValue(e.target.value);

    // setExpenses((prevState) => {
    //   return filteredByDate;
    // });
  }

  let filteredByDate = expenses.filter(
    (expense) => expense.date === Number(filterValue)
  );

  return (
    <div className="App">
      <h1>reactPractice</h1>
      <DateFilter changeDate={changeDate} />
      <List selected={selected} expenseList={filteredByDate} />
    </div>
  );
}

export default App;
