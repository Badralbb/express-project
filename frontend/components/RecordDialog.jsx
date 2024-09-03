import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CategoryIcon } from "./CategoryIcon";
export const RecordDialog = ({
  onComplete,
  amountType,
  setAmountType,
  categories,
}) => {
  const searchParams = useSearchParams();
  const create = searchParams.get("create");
  const record = create === "new";
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);
  if (!categories) {
    return;
  }
  console.log({ categories });
  return (
    <Dialog open={record}>
      <DialogContent className="max-w-[792px] w-full">
        <div className="flex justify-between items-center text-[#0F172A] border-b-2 p-4">
          <DialogTitle>Add Record</DialogTitle>
          <X className="cursor-pointer" onClick={() => router.push(`?`)} />
        </div>
        <div className="flex pt-5 pb-6">
          <div className="flex-1 px-6 flex flex-col gap-5">
            <div className="flex bg-[#F3F4F6] rounded-full max-w-[348px] w-full">
              <div
                onClick={() => setAmountType("Expense")}
                className={` ${
                  amountType === "Expense" && "bg-[#0166FF]"
                } px-4 py-2 rounded-3xl flex-1 text-center cursor-pointer`}
              >
                Expense
              </div>
              <div
                onClick={() => setAmountType("Income")}
                className={`py-2 rounded-3xl flex-1 text-center cursor-pointer ${
                  amountType === "Income" && "bg-[#16A34A]"
                }`}
              >
                Income
              </div>
            </div>
            <div className="flex flex-col gap-[22px]">
              <div className="bg-[#D1D5DB] px-4 py-3 rounded-lg">
                <div>Amount</div>
                <div className="flex gap-2 text-[#9CA3AF] items-center">
                  <Input className="bg-[#D1D5DB]" placeholder={"₮ 000.00"} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Category</div>
                <div className="bg-[#D1D5DB] flex p-3 rounded-lg relative">
                  <div className="flex-1 text-[#9CA3AF]">
                    {amountType === "Expense"
                      ? "choose"
                      : "Find or choose category"}
                  </div>
                  <ChevronRight
                    onClick={() => setShowCategories(true)}
                    className={`w-6 h-6 cursor-pointer ${showCategories ? 'hidden' : 'block'}`}
                  />
                  <ChevronDown
                    onClick={() => setShowCategories(false)}
                    className={`w-6 h-6 cursor-pointer ${showCategories ? 'block' : 'hidden'}`}
                  />
                  {showCategories && (
                    <div className="absolute flex flex-col cursor-pointer left-0 right-0 top-12">
                      <div className="p-4 bg-[#FFFFFF]">+ Add Category</div>
                      {categories.map((category) => (
                        <div
                          key={category.id}
                          className="p-4 bg-[#FFFFFF] flex gap-3 border-t-2"
                        >
                          <CategoryIcon
                            categoryIcon={category.icon}
                            IconColor={category.color}
                          />
                          <div>{category.name}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-2">
                  <div>Date</div>
                  <div className="flex bg-[#D1D5DB] px-4 py-3 rounded-lg">
                    <div className="flex-1">Date</div>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div>Date</div>
                  <div className="flex bg-[#D1D5DB] px-4 py-3 rounded-lg">
                    <div className="flex-1">Date</div>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={onComplete}
              className={`${
                amountType === "Expense"
                  ? "bg-[#0166FF] hover:bg-blue-900"
                  : "bg-[#16A34A] hover:bg-green-800"
              } mt-8 flex-1 rounded-3xl`}
            >
              Add Record
            </Button>
          </div>
          <div className="flex-1 px-6 flex flex-col gap-[22px]">
            <div className="flex flex-col gap-2">
              <div>Payee</div>
              <div className="flex bg-[#D1D5DB] px-4 py-3 rounded-lg items-center">
                <Input
                  className="flex-1 bg-[#D1D5DB]"
                  placeholder={"Write here"}
                />
                <ChevronDown />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div>Note</div>

              <Textarea className="bg-[#D1D5DB]" placeholder="Write here" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
