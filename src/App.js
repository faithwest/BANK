import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch transactions from your API or server
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  const filtered = transactions.filter((transaction) =>
    transaction.description.includes(search)
  );

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleTransactionDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  return (
    <div>
      <h1>Transaction Tracker</h1>
      <TransactionForm onTransactionSubmit={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleClearSearch}>Clear</button>

      <TransactionTable
        transactions={filtered}
        onTransactionDelete={handleTransactionDelete}
      />
    </div>
  );
}

export default App;
