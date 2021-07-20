import "./ExpenseDesc.css";

function ExpenseDesc(props) {
  return <h3 className="item-desc">{props.desc}</h3>;
}

export default ExpenseDesc;
