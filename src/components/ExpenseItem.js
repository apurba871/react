import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDesc from "./ExpenseDesc";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <ExpenseDesc desc={props.desc} />
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
