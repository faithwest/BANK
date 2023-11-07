import React, { useState } from "react";

function TransactionForm({ onTransactionSubmit }) {
  const [transaction, setTransaction] = useState({
    description: "",
    category: "",
    amount: "",
  });

  function newDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      date: newDate(),
      ...transaction,
      amount: parseFloat(transaction.amount),
    };

    onTransactionSubmit(newTransaction);

    // Clear the input fields
    setTransaction({
      description: "",
      category: "",
      amount: "",
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={transaction.category}
          onChange={handleInputChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleInputChange}
          required
        />

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
