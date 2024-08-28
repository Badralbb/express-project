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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  AirVent,
  BookA,
  ChartBarIncreasing,
  Check,
  ChevronDown,
  ChevronRight,
  Eye,
  House,
  HousePlus,
  Icon,
  ImageIcon,
  Leaf,
  LoaderPinwheel,
  Mic,
  NotebookPen,
  NotepadTextDashed,
  PictureInPicture2,
  Table,
  Tally5,
  UserPen,
  X,
  ZoomIn,
} from "lucide-react";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "./ui/popover";
import { set } from "date-fns";
import { Slider } from "./ui/slider";
const icons = [
  { name: "home", Icon: House },
  { name: "house", Icon: HousePlus },
  { name: "profile", Icon: UserPen },
  { name: "note", Icon: NotebookPen },
  { name: "stairs", Icon: ChartBarIncreasing },
  { name: "window", Icon: PictureInPicture2 },
  { name: "image", Icon: ImageIcon },
  { name: "zoom", Icon: ZoomIn },
  { name: "audio", Icon: Mic },
  { name: "tables", Icon: Table },
  { name: "notetaking", Icon: NotepadTextDashed },
  { name: "orderedlist", Icon: BookA },
  { name: "trees", Icon: Leaf },
  { name: "five", Icon: Tally5 },
  { name: "round7", Icon: LoaderPinwheel },
];
const colors = [
  { value: `#0166FF`, name: "blue" },
  { value: `#01B3FF`, name: "sky" },
  { value: `#41CC00`, name: "green" },
  { value: `#F9D100`, name: "yellow" },
  { value: `#FF7B01`, name: "orange" },
  { value: `#AE01FF`, name: "purple" },
  { value: `#FF0101`, name: "red" },
];
const types = [
  { name: "all", value: "all" },
  { name: "Income", value: "Income" },
  { name: "Expense", value: "Expense" },
];
export const AddNewCategory = () => {
  const [popoverContent, setPopoverContent] = useState(false);
  const [iconsName, setIconsName] = useState("home");
  const [checkColor, setCheckColor] = useState("");
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const loadlist = async () => {
    const response = await fetch(`http://localhost:4000/categories`);
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    loadlist();
  }, []);
  const createNewCategory = async () => {
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
  const [typeValue, setTypeValue] = useState("");
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <div className="flex bg-[#F9FAFB] flex-col gap-6 max-w-[282px] px-4">
        <div className="text-[#000000] text-2xl">Records</div>
        <Button
          onClick={() => setOpen(true)}
          className="flex  gap-1 hover:bg-[#0166FF] bg-[#0166FF] items-center rounded-3xl"
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

        <div>
          <Input className="bg-[#D1D5DB]" type="text" placeholder="search" />
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
            <div>clear</div>
          </div>
          <div className="flex flex-col gap-2">
            {categories.map((item) => (
              <div className="text-black flex justify-between" key={item.id}>
                <div className="flex gap-1">
                  <Eye />
                  <div>{item.name}</div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z"
                  fill="#0166FF"
                />
              </svg>

              <div onClick={createNewCategory}>Add Category</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>Amount Range</div>
              <div className="flex gap-4">
                <Input
                  value={0}
                  className="bg-[#D1D5DB]"
                  type="text"
                  placeholder="search"
                />
                <Input
                  className="bg-[#D1D5DB]"
                  type="text"
                  value={1000}
                  placeholder="search"
                />
              </div>
              <div>
                <Slider defaultValue={[50]} max={1000} step={1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between mb-2">
              <div className="text-[#0F172A]">Add Category</div>
              <div>
                <X
                  className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
            </DialogTitle>
            <div className="flex gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    onClick={() => setPopoverContent(true)}
                    variant="outline"
                    className="w-[84px] flex gap-1"
                  >
                    {icons.map(
                      (icon) =>
                        icon.name == iconsName && <icon.Icon key={icon.name} />
                    )}
                    <ChevronDown />
                  </Button>
                </PopoverTrigger>
                {popoverContent && (
                  <PopoverContent className="w-[312px] flex flex-col gap-6">
                    <div className="flex flex-wrap gap-6 w-full">
                      {icons.map(({ name, Icon }) => (
                        <button
                          onClick={() => {
                            setIconsName(name), setPopoverContent(false);
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
                )}
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
            <Button
              onClick={createNewCategory}
              className="w-full bg-[#16A34A] mt-4 hover:bg-[#16A34A]"
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
