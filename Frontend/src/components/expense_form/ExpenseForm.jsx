/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const {addExpense} =props;
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');


    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAmountChange = (event) => setAmount(event.target.value);
    const handleDateChange = (event) => setDate(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(title,amount,date);
        const data = {title : title,amount : amount,date : new Date(date)};
        addExpense(data);
        setTitle('')
        setDate('')
        setAmount('')
    }
    

  return (
    <div className='new-expense'>
        <form className='expense-form' onSubmit={handleFormSubmit}>
        <div className='input-group'>
            <label>Title</label>
            <input type='text' placeholder='Enter the title' onChange={handleTitleChange} />
        </div>
        <div className='input-group'>
            <label>Amount</label>
            <input type='text' placeholder='Enter the Amount' onChange={handleAmountChange} />
        </div>
        <div className='input-group'>
            <label>Date</label>
            <input type='date' onChange={handleDateChange}  />
        </div>

        <div className='form-control-buttons'>
            <button >Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    </div>
  )
}

export default ExpenseForm