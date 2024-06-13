import ExpenseItem from '../expense_item/ExpenseItem';
import './ExpenseList.css';

function ExpenseList({list}) {
    // const { list } = props;
  return (
    <div className='expenses-list'>
        {
            list.map( (item,index) => {
                return (
                    <ExpenseItem expense={item} key={index}/>
                );
            })
        }
        
    </div>
  )
}

export default ExpenseList;