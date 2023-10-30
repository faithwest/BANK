import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState('');//container , change
  const [description, setDescription] = useState('');//container , change
  const [amount, setAmount] = useState('');//container , change

  const handleSubmit = (e) => {//on submit ,event 
    e.preventDefault();//fetch data and avoid a full page reload, 

    if (date && description && amount) {
      // check all the fields are filled with correct info
      onAddTransaction({
        date,
        description,
        amount,
      });
        // set... if the info filled is corect then show ...
      setDate('');
      setDescription('');
      setAmount('');
    } else {
      // else throw an error 
      alert('Please fill out all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
