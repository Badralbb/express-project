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

import { toast } from "sonner";

import { colors, icons, types } from "@/app/datas/data";

import { CategoryIcon } from "./CategoryIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster } from "./ui/toaster";

export const CategoryDialog = ({
  open,
  onClose,
  onComplete,
  editingCategory,
  editingCategoryFunction,
}) => {
  const [iconsName, setIconsName] = useState("home");
  const [checkColor, setCheckColor] = useState("blue");
  const searchParams = useSearchParams();
  const createCategory = searchParams.get(`createCategory`);
  const createCategoryOpen = createCategory === `new`;
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    onComplete();
  }, []);
  const reset = () => {
    setValue("");
    setIconsName("home");
    setCheckColor("blue");
    editingCategoryFunction(null);
  };

  useEffect(() => {
    if (editingCategory) {
      setIconsName(editingCategory.icon);
      setCheckColor(editingCategory.color);
      setValue(editingCategory.name);
    }
  }, [editingCategory]);
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
      onComplete();
      toast("Successfully created.");

      closedDialog();
    } else {
      toast("please enter value");
    }
    setLoading(false);
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

  function closedDialog() {
    onClose(false);
    reset();
  }

  return (
    <Dialog open={open || createCategoryOpen}>
      <Toaster />
      <DialogContent className="p-6 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between mb-2">
            <div className="text-[#0F172A]">Add Category</div>
            <div>
              <X
                className="w-6 h-6 hover:cursor-pointer"
                onClick={() => {
                  closedDialog();
                  router.push(`?`);
                }}
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
              className="w-full bg-[#16A34A] mt-4 hover:bg-[#16A34A]"
            >
              Edit
            </Button>
          ) : (
            <Button
              disabled={loading}
              onClick={() => {
                createNewCategory();
                router.push(`?`);
              }}
              className="w-full bg-[#16A34A] mt-4 hover:bg-[#16A34A]"
            >
              Add
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
