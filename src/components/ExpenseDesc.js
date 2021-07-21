import "./ExpenseDesc.css";

function ExpenseDesc(props) {
  return <h4 className="item-desc">{props.desc}</h4>;
}

export default ExpenseDesc;
