"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

export const AddNewCategory = () => {
  const [category, setCategory] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setCategory(true)}
        className="flex gap-1 bg-[#0166FF] items-center rounded-3xl"
      >
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
        <div>AddNew</div>
      </Button>

      <Card className="max-w-[494px] w-full">
        <div className="flex justify-between items-center py-5 border-b-2 px-6">
          <CardTitle>Add Category</CardTitle>
          <Image src={"/images/X.svg"} width={15} height={15} />
        </div>
        <div className="p-6">
          <div className="flex gap-3">
            <div className="w-20">
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      <Image src={"/images/home.svg"} width={20} height={20} />
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="flex">
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                   
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="max-w-[350px] w-full">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="name" />
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="mt-8">
            <Button className="rounded-3xl bg-[#16A34A] w-full">Income</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
