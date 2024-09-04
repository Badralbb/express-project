"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { RecordDialog } from "./RecordDialog";

export const CategoriesList = ({ categories }) => {
  const [amountType, setAmountType] = useState("Expense");

  const [transactions, setTransactions] = useState([]);
  const loadTransactionList = async () => {
    const response = await fetch("http://localhost:4000/transactions");
    const data = await response.json();
    setTransactions(data);
  };
  useEffect(() => {
    loadTransactionList();
  }, []);

  return (
    <div className="mt-6 max-w-[894px] w-full flex flex-col gap-6">
      <RecordDialog
        onComplete={loadTransactionList}
        amountType={amountType}
        setAmountType={setAmountType}
        categories={categories}
      />
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-[#E5E7EB] p-1 rounded-lg">
            <ChevronLeft />
          </div>
          <div>Last 30days</div>
          <div className="bg-[#E5E7EB] p-1 rounded-lg">
            <ChevronRight />
          </div>
        </div>
        <div className="flex bg-[#F9FAFB] p-3 rounded-lg">
          <div className="flex-1">Newest first</div>
          <ChevronDown />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>Today</div>
        {transactions.map((transaction) => (
          <div
            key={transaction.name}
            className="flex justify-between px-6 py-3 bg-[#ffffff] "
          >
            <div className="flex gap-2 items-center">
              <div>
                <Checkbox />
              </div>
              <div>{transaction.icon}</div>
              <div className="flex flex-col">
                <div>{transaction.name}</div>
                <div>{transaction.date}</div>
              </div>
            </div>
            <div>{transaction.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
