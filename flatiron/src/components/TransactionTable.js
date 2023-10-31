import React from "react";

function TransactionTable({ transactions }) {

  //function handleDelete(id){

  //  }
    
    
   // console.log(id)
  //}

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead onDelete>
          <tr>
            <th>date</th>
            <th>description</th>
            <th>category</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button type="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

          }
export default TransactionTable;
