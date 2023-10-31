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

  // const filtered = transactions.filter((transaction) => transaction.description.includes(Search))//
  // const handleAddTransaction = (transaction) => {
  //   setTransactions([...transactions, transaction]);

  // };
  const handleTransactionDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id!== id));
    };
    const handleSearchChange = (e) => {
      setSearch(e.target.value);
      console.log(Search)
      };
      const handleClearSearch = () => {
        setSearch('');
        console.log(Search)
        };


    return (
          <div>
            {/* <h1>Transaction Tracker</h1>
      <TransactionForm onSubmit={handleAddTransaction} 
        onChange={(e) => setSearch(e.target.value)}
      />
      */}
           <TransactionTable
           transactions={filtered}
           onTransactionDelete={handleTransactionDelete}
           />
           <input
           type="text"
           placeholder="Search transactions "
           value={Search}
           onChange={(e) => handleSearchChange(e)}
           />
           <button onClick={handleClearSearch}>Clear</button>
           </div>
           );
           }
    export default App;
         
