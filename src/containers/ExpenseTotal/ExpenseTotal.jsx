import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);
  const totalExpense = expenseList.reduce((totalExpense, currentExpense) => {
    return (
      Number.parseFloat(totalExpense) + Number.parseFloat(currentExpense.price)
    );
  }, 0);

  const remainingMoney = (income - totalExpense).toFixed(2);

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>${totalExpense}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>
          ${remainingMoney > 0 ? remainingMoney : 0}
        </div>
      </div>
      {remainingMoney < 0 ? (
        <div className="row">
          <div className={`col ${s.label} ${s.exceeded}`}>Exceeded income</div>
          <div className={`col ${s.amount} ${s.exceeded}`}>
            ${remainingMoney}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
