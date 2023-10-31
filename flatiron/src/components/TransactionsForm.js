import React, { useState } from "react";

function TransactionForm({ onSubmit }) {
  const [description, SetDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  function newDate (){
    let today = new Date();
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()
    return `${year}-${month}-${day}`
  }
  function handleSubmit (e){
    e.preventDefault()
    const newTransaction ={
      id: Date.now(),
      date: newDate(),
      description,
      category,
      amount: parseFloat(amount)
    }
    onSubmit(newTransaction)
    
    SetDescription('')
    setCategory('')
    setAmount('')
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
        required
      />

      <label>Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
     
      </form>
      
      <button type="submit">Add Transaction</button>
      </div>
  )
 
}
export default TransactionForm;