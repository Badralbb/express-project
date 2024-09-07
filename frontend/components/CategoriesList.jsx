"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Delete,
  DeleteIcon,
  Trash,
} from "lucide-react";
import { RecordDialog } from "./RecordDialog";
import { CategoryIcon } from "./CategoryIcon";
import { Value } from "@radix-ui/react-select";
import { Input } from "./ui/input";

export const CategoriesList = ({ categories, typeValue }) => {
  const [amountType, setAmountType] = useState("Expense");
  const [showTrash, setShowTrash] = useState(false);
  const [count, setCount] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [checkboxName, setCheckboxName] = useState("");
  const [checkboxValue, setCheckboxValue] = useState([]);

  const loadTransactionList = async () => {
    const response = await fetch(
      `http://localhost:4000/transactions?date=${count}`
    );
    const data = await response.json();
    setTransactions(data);
  };
  useEffect(() => {
    loadTransactionList();
  }, [count]);
  const countDown = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };
  const countUp = () => {
    if (count != 30) {
      setCount(count + 1);
    }
  };
  console.log({ transactions });
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
          <div
            onClick={countDown}
            className="bg-[#E5E7EB] p-1 rounded-lg cursor-pointer"
          >
            <ChevronLeft />
          </div>
          <div>Last {count} days</div>
          <div
            onClick={countUp}
            className="bg-[#E5E7EB] p-1 rounded-lg cursor-pointer"
          >
            <ChevronRight />
          </div>
        </div>
        <div className="flex bg-[#F9FAFB] p-3 rounded-lg">
          <div className="flex-1">Newest first</div>
          <ChevronDown />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <div>Today</div>
          <div className="cursor-pointer">{showTrash && <Trash />}</div>
        </div>
        {transactions.map(
          (transaction) =>
            (typeValue === transaction.type || typeValue === "all") && (
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
    </div>
  );
};
