"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { Check, ChevronDown, ChevronRight, X } from "lucide-react";

import { PlusSvg } from "./Plus";

import { Toaster } from "./ui/sonner";
import { types } from "@/app/datas/data";
import { CategoriesList } from "./CategoriesList";
import { CategoryIcon } from "./CategoryIcon";
import { CategoryDialog } from "./CategoryDialog";

export const AddNewCategory = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadlist = async () => {
    const response = await fetch(`http://localhost:4000/categories`);
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    loadlist();
  }, []);

  const DeleteOneCategory = async (id) => {
    await fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    });
    loadlist();
  };
  const DeleteAllCategories = async () => {
    await fetch(`http://localhost:4000/categories`, {
      method: "DELETE",
    });
    loadlist();
  };
  const [typeValue, setTypeValue] = useState("all");
  const [inputValue, setInputValue] = useState(0);
  const inputTarget = (event) => {
    const newValue = Number(event.target.value);
    setInputValue(newValue);
  };
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(false);
  const [editingCategory,setEditingCategory] = useState()
  return (
    <div className="max-w-[1200px] w-full mx-auto flex gap-6">
      <div className="flex bg-[#F9FAFB] flex-col gap-6 max-w-[282px] w-full  px-4">
        <div className="text-[#000000] text-2xl">Records</div>
        <Toaster />
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="flex  gap-1 text-white hover:bg-[#0166FF] bg-[#0166FF] items-center rounded-3xl"
        >
          <PlusSvg color={"#FFFFFF"} />
          <div>AddNew</div>
        </Button>
        <div className="relative">
          <Input
            className="bg-[#D1D5DB]"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            type="text"
            placeholder="search"
          />

          <div className="absolute left-0 right-0 top-11 px-4 bg-white">
            {/* {categories.map((category) =>
              category.name.includes(search) ? (
                <div
                  key={category.id}
                  className="border-b-2 py-4 cursor-pointer"
                >
                  {category.name}
                </div>
              ) : (
                ""
              )
            )} */}
          </div>
        </div>
        <div className="text-[#1F2937] text-base">
          <div>Types</div>
          <div className="mt-4 flex flex-col gap-1">
            {types.map((item) => (
              <div key={item.name} className="flex items-center gap-1">
                <div
                  onClick={() => setTypeValue(item.name)}
                  className="w-4 h-4 hover:cursor-pointer rounded-full border-[2px] grid place-items-center"
                >
                  {item.name == typeValue && <Check className="w-3 h-3" />}
                </div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[#1F2937] flex justify-between mb-5">
            <div>Category</div>
            <Button onClick={DeleteAllCategories}>clear</Button>
          </div>
          <div className="flex flex-col gap-2">
            {categories.map((item) => (
              <div className="text-black flex justify-between" key={item.id}>
                <div className="flex gap-1 cursor-pointer">
                  <div>
                    <CategoryIcon
                      categoryIcon={item.icon}
                      IconColor={item.color}
                    />
                  </div>

                  <div>{item.name}</div>
                </div>
                <div className="cursor-pointer flex flex-col items-end">
                  <ChevronRight
                    onClick={() => setUpdate(true)}
                    className={`${update ? "hidden" : "block"}`}
                  />
                  <ChevronDown
                    onClick={() => setUpdate(false)}
                    className={`${update ? "block" : "hidden"}`}
                  />
                  {update && (
                    <div className="flex gap-1">
                      <Button onClick={() => setEditingCategory(item)}>
                        edit
                      </Button>
                      <Button onClick={() => DeleteOneCategory(item.id)}>
                        delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <CategoryDialog
              open={open}
              onClose={() => setOpen(false)}
              onComplete={loadlist}
              editingCategory={editingCategory}
            />
            <div
              onClick={() => setOpen(true)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <PlusSvg color={"#0166FF"} />

              <div>Add Category</div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div>Amount Range</div>
              <div className="flex gap-4">
                <div className="bg-[#D1D5DB] py-4 px-3 flex-1 rounded-lg">
                  {inputValue}
                </div>
                <div className="bg-[#D1D5DB] py-4 px-3 flex-1 rounded-lg">
                  {1000}
                </div>
              </div>
              <div>
                <Input
                  type="range"
                  value={inputValue}
                  max={1000}
                  onChange={inputTarget}
                  min={0}
                />
                <div className="flex justify-between mt-4">
                  <div>{inputValue}</div>
                  <div>{1000}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoriesList />
    </div>
  );
};
