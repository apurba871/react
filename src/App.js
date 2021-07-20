import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
          desc={expenses[0].desc}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
          desc={expenses[1].desc}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
          desc={expenses[2].desc}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
          desc={expenses[3].desc}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
    </div>
  );
}

export default App;
