import './ExpenseDate.css';

function ExpenseDate(props) {
    const {date} = props;
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    console.log(day);
  return (
    <div className='expense-date'>
    <div className='expense-date-month'>{month}</div>
    <div className='expense-date-day'>{day}</div>
    <div className='expense-date-year'>{year}</div>
    </div>
  )
}

export default ExpenseDate;