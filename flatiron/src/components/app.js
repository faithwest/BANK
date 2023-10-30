//importing necessary dependencies
import React, { useState, useEffect } from 'react'; 
import TransactionForm from './TransactionForm'; 
import TransactionTable from './TransactionTable'; 

//create a fn
function App() {
  const [transactions, setTransactions] = useState([]);//store for transaction
  const [descriptionFilter, setDescriptionFilter] = useState('');//search by des--""change
  const [isLoaded, setIsLoaded] = useState(false); //check loaded transactions

  const handleAddTransaction = (newTransaction) => {//add the new plus existing using spread
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>//create newarray for the wanted/searched only
    transaction.description.includes(descriptionFilter)
  );

  useEffect(() => {//useeffect fetches data from api
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);//handling errors
        setIsLoaded(true); //and when loading it sets it true
      });
  }, []);//get,converts,

  if (!isLoaded) return <h3>Loading...</h3>;//stiil loading

  return (
    <div>
      <h1>Transaction Tracker</h1>
      <input
        type="text"
        placeholder="Search transactions by description"//faded input text
        value={descriptionFilter}
        onChange={(e) => setDescriptionFilter(e.target.value)}
      />{/*shows the filtered data */}
      <TransactionForm onAddTransaction={handleAddTransaction} />{/*add new transactions */}
      <TransactionTable transactions={filteredTransactions} />{/*receives the props */}
    </div>
  );
}

export default App;
