"use client";

import { useEffect, useState } from "react";

export const CategoriesList = () => {
  const [transactions, setTransactions] = useState([]);
  const loadTransactionList = async () => {
    const response = await fetch("http://localhost:4000/transactions");
    const data = await response.json();
    setTransactions(data)
  };
  useEffect(() => {
    loadTransactionList();
  }, []);
  const createNewTransaction = async () => {
    await fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: value,
        color: checkColor,
        icon: iconsName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    loadTransactionList();
  };
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.name} className="flex justify-between">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <div>{transaction.name}</div>
              <div>{transaction.date}</div>
            </div>
            <div>{transaction.icon}</div>
          </div>
          <div>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};
