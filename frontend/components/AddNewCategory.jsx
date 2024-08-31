"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Check, ChevronDown, ChevronRight, X } from "lucide-react";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "./ui/popover";
import { PlusSvg } from "./Plus";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import { colors, icons, types } from "@/app/datas/data";

export const AddNewCategory = () => {
  const [iconsName, setIconsName] = useState("home");
  const [checkColor, setCheckColor] = useState("blue");
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const loadlist = async () => {
    const response = await fetch(`http://localhost:4000/categories`);
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    loadlist();
  }, []);
  const reset = () => {
    setValue("");
    setIconsName("home");
    setCheckColor("blue");
    setEditingCategory(null);
  };
  const createNewCategory = async () => {
    setLoading(true);
    if (value) {
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
      loadlist();
      toast("Successfully created.");
      setLoading(false);
      closedDialog();
      setValue("");
    }
  };
  const updateCategory = async () => {
    if (value) {
      setLoading(true);
      await fetch(`http://localhost:4000/categories/${editingCategory.id}`, {
        method: "PUT",
        body: JSON.stringify({
          updatedName: value,
          color: checkColor,
          icon: iconsName,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      loadlist();
      toast("Successfully updated.");
      setLoading(false);
      setValue("");
      closedDialog();
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      console.log(event.key);
      handleChange(event);

      createNewCategory();

      setValue("");
    }
  };
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
  const [editingCategory, setEditingCategory] = useState();
  useEffect(() => {
    if (editingCategory) {
      setValue(editingCategory.name);
      setIconsName(editingCategory.icon);
      setCheckColor(editingCategory.color);
      setOpen(true);
    }
  }, [editingCategory]);
  function closedDialog() {
    setOpen(false);
    reset();
  }

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <div className="flex bg-[#F9FAFB] flex-col gap-6 max-w-[282px] px-4">
        <div className="text-[#000000] text-2xl">Records</div>
        <Toaster />
        <Button
          onClick={() => {
            reset();
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

      <Dialog open={open}>
        <DialogContent className="p-6 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between mb-2">
              <div className="text-[#0F172A]">Add Category</div>
              <div>
                <X
                  className="w-6 h-6 hover:cursor-pointer"
                  onClick={closedDialog}
                />
              </div>
            </DialogTitle>
            <div className="flex gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[84px] flex gap-1">
                    <CategoryIcon
                      categoryIcon={iconsName}
                      IconColor={checkColor}
                    />
                    <ChevronDown />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-[312px] flex flex-col gap-6">
                  <div className="flex flex-wrap gap-6 w-full">
                    {icons.map(({ name, Icon }) => (
                      <button
                        className={`${name == iconsName && "bg-blue-300"} p-2`}
                        onClick={() => {
                          setIconsName(name);
                        }}
                        key={name}
                      >
                        <Icon />
                      </button>
                    ))}
                  </div>
                  <div className="w-full border-t-2"></div>
                  <div className="flex gap-4">
                    {colors.map((color) => (
                      <div
                        onClick={() => setCheckColor(color.name)}
                        key={color.name}
                        className="w-6 h-6 rounded-full hover:cursor-pointer"
                        style={{ backgroundColor: color.value }}
                      >
                        {color.name == checkColor && <Check />}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <Input
                className="max-w-[350px] w-full"
                placeholder="name"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </DialogHeader>

          <DialogFooter>
            {editingCategory ? (
              <Button
                disabled={loading}
                onClick={updateCategory}
                className="w-full bg-[#16A34A] mt-4 hover:bg-[#16A34A]"
              >
                edit
              </Button>
            ) : (
              <Button
                disabled={loading}
                onClick={createNewCategory}
                className="w-full bg-[#16A34A] mt-4 hover:bg-[#16A34A]"
              >
                Add
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

function CategoryIcon({ categoryIcon, IconColor }) {
  const iconObject = icons.find((item) => item.name === categoryIcon);
  const colorObject = colors.find((item) => item.name === IconColor);
  if (!iconObject) return null;
  let hexColor;
  if (!colorObject) {
    hexColor = "#000";
  } else {
    hexColor = colorObject.value;
  }
  const { Icon } = iconObject;
  return <Icon style={{ color: hexColor }} />;
}
