import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomeAction, noIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const income = useSelector((store) => store.EXPENSE.income);
  const formattedIncome = isNaN(income) ? "" : income.toFixed(2);

  function setIncome(e) {
    const value = e.target.value;

    if (!value || isNaN(value)) {
      dispatch(setIncomeAction(0));
      dispatch(noIncomeAction(true));
    } else {
      dispatch(setIncomeAction(Number.parseFloat(value)));
      dispatch(noIncomeAction(false));
    }
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          onChange={setIncome}
          defaultValue={formattedIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
