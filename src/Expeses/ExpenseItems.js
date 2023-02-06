import ExpDate from "./ExpDate";

const ExpenseItems = (props) => {
  return (
    <div>
      <div>
        <div className="card ">
          <ExpDate date={props.date} />
        </div>
        <div className="">{props.title}</div>
        <div className="">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
