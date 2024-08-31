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
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-between items-center">
            <DialogTitle>Edit profile</DialogTitle>
            <X className="cursor-pointer" onClick={() => setRecord(false)} />
          </div>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
