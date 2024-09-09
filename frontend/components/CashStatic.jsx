"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { HeaderNav } from "./HeaderNav";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CashStatic = () => {
  let income = 0;
  let expense = 0;
  const [transaction, setTransaction] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const getTransactions = async () => {
    const response = await fetch(`http://localhost:4000/transactions`);
    const data = await response.json();
    setTransaction(data);
  };
  useEffect(() => {
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].type === "Income") {
        income = income + Number(transaction[i].amount);
      }
    }
    setIncomeAmount(income);
  }, [transaction]);
  useEffect(() => {
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].type === "Expense") {
        expense = expense + Number(transaction[i].amount);
      }
    }
    setExpenseAmount(expense);
  }, [transaction]);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <HeaderNav />
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex gap-6">
          <div className="max-w-[384px] relative w-full overflow-hidden rounded-xl h-[216px] bg-blue-600">
            <Image
              width={500}
              height={500}
              className="w-full"
              src={"/images/Noise.png"}
            />
            <div className="w-[180px] h-[90px] rounded-full bg-slate-500 right-0 bottom-0"></div>
          </div>
          <div className="max-w-[384px] w-full rounded-xl bg-[#FFFFFF]">
            <div className="border-b-2 px-6">
              <div className="py-4 flex gap-2 items-center">
                <div className="rounded-full w-2 h-2 bg-[#84CC16]"></div>
                <div className="text-[#0F172A] text-base">Your Income</div>
              </div>
            </div>
            <div className="px-6">
              <div className="pt-5">
                <div className="flex gap-1 text-[#000000] text-4xl">
                  <div>{incomeAmount}</div>
                  <div>₮</div>
                </div>
                <div className="text-[#64748B] text-lg">Your Income Amount</div>
              </div>
              <div className="mt-4 pb-6 flex gap-1 items-center">
                <div className="w-6 h-6 rounded-full grid place-items-center bg-[#84CC16]">
                  <ArrowUp className="text-white w-4 h-4" />
                </div>
                <div className="text-[#000000] text-lg">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[384px] w-full rounded-xl bg-[#FFFFFF]">
            <div className="border-b-2 px-6">
              <div className="py-4 flex gap-2 items-center">
                <div className="rounded-full w-2 h-2 bg-[#0166FF]"></div>
                <div className="text-[#0F172A] text-base">Total Expenses</div>
              </div>
            </div>
            <div className="px-6">
              <div className="pt-5">
                <div className="flex gap-1 text-[#000000] text-4xl">
                  <div>-{expenseAmount}</div>
                  <div>₮</div>
                </div>
                <div className="text-[#64748B] text-lg">Your Income Amount</div>
              </div>
              <div className="mt-4 pb-6 flex gap-1 items-center">
                <div className="w-6 h-6 rounded-full grid place-items-center bg-[#84CC16]">
                  <ArrowDown className="text-white w-4 h-4" />
                </div>
                <div className="text-[#000000] text-lg">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
