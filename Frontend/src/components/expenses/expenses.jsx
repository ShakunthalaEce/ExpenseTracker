import ExpenseList from '../expense_list/ExpenseList';
import ExpenseForm from '../expense_form/ExpenseForm';
import { useState } from 'react';
import './Expenses.css';

const EXPENSES =[{
  title:'phone',
  amount:2000,
  date:new Date()
},{
  title:'Fridge',
  amount:12300,
  date:new Date()
},{
  title:'Fruits',
  amount:1000,
  date:new Date()
},{
  title:'mern-course',
  amount:2000,
  date:new Date()
}]

function Expenses() {
    const [expenses,setExpenses]=useState([]);

  //   useEffect(async () => {
  //     const res = await fetch('')
  //     setExpenses(res)
  //  }, [])

    const addExpenses = async (newObj) => {

      await fetch('http://localhost:5000/expense/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObj)
      })

      setExpenses([...expenses , newObj]);
    }

  return (
    <div className='expenses'>
      <h1>Expenses Track</h1>
     <ExpenseForm addExpense={addExpenses}/>
      <ExpenseList list={expenses} />
    </div>
  )
}

export default Expenses