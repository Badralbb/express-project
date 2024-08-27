"use client";

import { useEffect, useState } from "react";
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
const icons = [
  "/images/AnchorSimple.svg",
  "/images/Baseball.svg",
  "/images/BezierCurve.svg",
  "/images/Exam.svg",
  "/images/Exclude.svg",
  "/images/GlobeSimple.svg",
  "/images/home.svg",
  "/images/HourglassSimpleMedium.svg",
  "/images/IdentificationBadge.svg",
  "/images/IdentificationCard.svg",
  "/images/ImageSquare.svg",
  "/images/IntersectSquare.svg",
  "/images/Ladder.svg",
  "/images/Leaf.svg",
  "/images/ListPlus.svg",
  "/images/MagnifyingGlassPlus.svg",
  "/images/Microphone.svg",
  "/images/MicrosoftExcelLogo.svg",
  "/images/Notepad.svg",
  "/images/NumberCircleSeven.svg",
  "/images/NumberFive.svg",
  "/images/OrangeSlice.svg",
  "/images/Peace.svg",
  "/images/Pencil.svg",
  "/images/Question.svg",
  "/images/RoadHorizon.svg",
  "/images/ToiletPaper.svg",
  "/images/Vector.svg",
  "/images/Vignette.svg",
  "/images/Watch.svg",
];
const colors = [
  { value: `#0166FF` },
  { value: `#01B3FF` },
  { value: `#41CC00` },
  { value: `#F9D100` },
  { value: `#FF7B01` },
  { value: `#AE01FF` },
  { value: `#FF0101` },
];
export const AddNewCategory = () => {
  const [categories, setCategories] = useState([]);
  const loadlist = async () => {
    const response = await fetch(`http://localhost:4000/categories`);
    const data = await response.json();
    setCategories(data);
  };
  const createNewCategory = async () => {
    const name = prompt("name...");
    if (name) {
      await fetch(`http://localhost:4000/categories`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          color: "red",
          icon: "hooson",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
     loadlist()
    }
  };
  useEffect(() => {
    loadlist();
  }, []);
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

      <Card className={`max-w-[494px] w-full ${category ? "block" : "hidden"}`}>
        <div className="flex justify-between items-center py-5 border-b-2 px-6">
          <CardTitle>Add Category</CardTitle>
          <button onClick={() => setCategory(false)}>
            <Image src={"/images/X.svg"} width={15} height={15} />
          </button>
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
                  <SelectGroup className="grid grid-cols-6 gap-y-6 pb-6">
                    {icons.map((cat, index) => (
                      <SelectItem key={index} value={cat}>
                        <Image src={cat} width={24} height={24} />
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <div className="border-b-2 w-[320px] mx-auto"></div>
                  <div className="py-5 flex gap-7 px-7">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full bg-[${color.value}] cursor-pointer`}
                      ></div>
                    ))}
                  </div>
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
