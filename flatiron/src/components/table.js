import React from "react";


function Table ({Transactions}) {
    return 
        <div>
            <h1>Transactions</h1>
            <table>
              <thead>
                <tr>
                    <th>date</th>
                    <th>description</th>
                    <th>category</th>
                    <th>amount</th>
                </tr>
                </thead> 
                <tbody>
                    {Transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            </tr>
                            ))}
                          </tbody>  
        
            </table>
            
        </div>
    
}

export default Table;