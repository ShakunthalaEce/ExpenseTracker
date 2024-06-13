import ExpenseDate from '../expense_date/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const {title,date,amount} = props.expense;
  return (
    <div className='card expense-item'>
        <ExpenseDate date={date}/>
        <div className='expense-name'>{title}</div>
        <div className='expense-amount'>₹{amount}</div>
        
    </div>
  )
}

export default ExpenseItem;