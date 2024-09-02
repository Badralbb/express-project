"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { X } from "lucide-react";

export const HeaderNav = () => {
  const [record, setRecord] = useState(false);
  return (
    <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center py-4">
      <div className="flex gap-6 items-center">
        <div>
          <Image src={"/images/Header.svg"} width={40} height={40} />
        </div>
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6" onClick={() => setRecord(true)}>
        <Button className="flex gap-1 bg-[#0166FF] items-center rounded-3xl hover:bg-blue-700">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 8C15.5 8.16576 15.4342 8.32473 15.3169 8.44194C15.1997 8.55915 15.0408 8.625 14.875 8.625H8.625V14.875C8.625 15.0408 8.55915 15.1997 8.44194 15.3169C8.32473 15.4342 8.16576 15.5 8 15.5C7.83424 15.5 7.67527 15.4342 7.55806 15.3169C7.44085 15.1997 7.375 15.0408 7.375 14.875V8.625H1.125C0.95924 8.625 0.800269 8.55915 0.683058 8.44194C0.565848 8.32473 0.5 8.16576 0.5 8C0.5 7.83424 0.565848 7.67527 0.683058 7.55806C0.800269 7.44085 0.95924 7.375 1.125 7.375H7.375V1.125C7.375 0.95924 7.44085 0.800269 7.55806 0.683058C7.67527 0.565848 7.83424 0.5 8 0.5C8.16576 0.5 8.32473 0.565848 8.44194 0.683058C8.55915 0.800269 8.625 0.95924 8.625 1.125V7.375H14.875C15.0408 7.375 15.1997 7.44085 15.3169 7.55806C15.4342 7.67527 15.5 7.83424 15.5 8Z"
              fill="white"
            />
          </svg>
          <div>Record</div>
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <Dialog open={record}>
        <DialogContent className="max-w-[792px] w-full">
          <div className="flex justify-between items-center text-[#0F172A] border-b-2 p-4">
            <DialogTitle>Add Record</DialogTitle>
            <X className="cursor-pointer" onClick={() => setRecord(false)} />
          </div>
          <div className="flex pt-5">
            <div className="flex-1 px-6 flex flex-col gap-5">
              <div className="flex bg-[#F3F4F6] rounded-full max-w-[348px] w-full">
                <div className="bg-[#0166FF] px-4 py-2 rounded-3xl flex-1 text-center">
                  Expense
                </div>
                <div className="py-2 rounded-3xl flex-1 text-center">
                  Income
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-[#D1D5DB] px-4 py-3 gap-[22px] rounded-lg">
                  <div>Amount</div>
                  <div className="flex gap-2">
                    <div>₮</div>
                    <div className="text-[#9CA3AF]">000.00</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>Category</div>
                  <div></div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
