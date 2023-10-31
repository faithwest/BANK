import React, { useState, useEffect } from 'react'; 
import TransactionForm from './TransactionsForm'; 
import TransactionTable from './TransactionTable'; 

function App() {
  const [transactions, setTransactions] = useState([]);
  const [Search, setSearch] = useState('');
  //const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      
  }, []);

  const filtered = transactions.filter((transaction) => transaction.description.includes(Search))//
  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);

  };
  
  return (
    <div>
      <h1>Transaction Tracker</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search transactions "
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
     
      <TransactionTable transactions={filtered} />
    </div>
  );
}

export default App;
