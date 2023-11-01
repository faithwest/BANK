import React from "react";

function TransactionTable({ transactions, onTransactionDelete }) {
  const handleTransactionDelete = (transactionId) => {onTransactionDelete(transactionId)
  };
  const tableStyle = {
    width: "100%",
    border: "1px solid #ccc",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const headerCellStyle = {
    background: "#333",
    color: "white",
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #fff",
  };

  const cellStyle = {
    border: "1px solid #ccc",
    padding: "8px",
  };

  const deleteButtonStyle = {
    backgroundColor: "#3e8499",
    color: "white",
    borderRadius: "10px 5px",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>Transactions</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Date</th>
            <th style={headerCellStyle}>Description</th>
            <th style={headerCellStyle}>Category</th>
            <th style={headerCellStyle}>Amount</th>
            <th style={headerCellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={cellStyle}>{transaction.date}</td>
              <td style={cellStyle}>{transaction.description}</td>
              <td style={cellStyle}>{transaction.category}</td>
              <td style={cellStyle}>{transaction.amount}</td>
              <td style={cellStyle}>
              <button style={{...deleteButtonStyle, cursor: "pointer"}} type="button"  onClick={() => onTransactionDelete(transaction.Id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
