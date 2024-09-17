"use client";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { CategoryIcon } from "./CategoryIcon";

export const CashRecords = () => {
  const [transaction, setTransaction] = useState([]);
  const getTransactions = async () => {
    const response = await fetch(
      `https://express-project-wbdw.onrender.com/transactions`
    );
    const data = await response.json();
    setTransaction(data);
  };
  useEffect(() => {
    getTransactions();
  }, []);
  console.log({ transaction });
  if (!transaction.length) return null;
  return (
    <div className="px-6 max-w-[1200px] w-full mx-auto ">
      <div className="py-4">
        <div className="border-b-2 shadow text-[#0F172A] text-base">
          Last Records
        </div>
      </div>
      {transaction.map(
        (transaction, index) =>
          index < 5 && (
            <div
              key={transaction.id}
              className="flex justify-between px-6 py-3 bg-[#ffffff] rounded-lg shadow"
            >
              <div className="flex gap-2 items-center">
                <div className="cursor-pointer">
                  <Input type="checkbox" />
                </div>
                <div>
                  <CategoryIcon
                    IconColor={transaction.color}
                    categoryIcon={transaction.icon}
                  />
                </div>
                <div className="flex flex-col">
                  <div>{transaction.name}</div>
                  <div>{transaction.time}</div>
                </div>
              </div>
              <div
                className={`${
                  transaction.type === "Expense"
                    ? "text-[#F54949]"
                    : "text-[#23E01F]"
                }`}
              >
                {`${transaction.type === "Expense" ? "- " : "+"}` +
                  "₮ " +
                  transaction.amount}
              </div>
            </div>
          )
      )}
    </div>
  );
};
