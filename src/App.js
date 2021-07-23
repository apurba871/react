import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Monitor",
      amount: 200.45,
      date: new Date(2021, 1, 15),
      desc: 'Dell 21.5" LED',
    },
    {
      id: "e2",
      title: "Keyboard",
      amount: 60.75,
      date: new Date(2021, 3, 17),
      desc: "Logitech K200",
    },
    {
      id: "e3",
      title: "Mouse",
      amount: 20.44,
      date: new Date(2021, 5, 20),
      desc: "Logitech M200",
    },
    {
      id: "e4",
      title: "Chassis",
      amount: 1200.45,
      date: new Date(2021, 2, 15),
      desc: "Zebronics Bijli 2",
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
