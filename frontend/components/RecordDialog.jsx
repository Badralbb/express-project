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
import { CategoryIcon } from "./CategoryIcon";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "./ui/select";
import { SelectDate } from "./SelectDate";
import { TImeSetter } from "./Timesetter";
import { useEffect, useState } from "react";
import { Value } from "@radix-ui/react-select";
export const RecordDialog = ({
  amountType,
  setAmountType,
  categories,
  onComplete,
}) => {
  async function getOneCategory(id) {
    const response = await fetch(`http://localhost:4000/categories/${id}`);
    const data = await response.json();
    setOneCategory(data);
    console.log({ data });
  }
  const [oneCategory, setOneCategory] = useState();
  const searchParams = useSearchParams();
  const create = searchParams.get("create");
  const record = create === "new";
  const router = useRouter();
  const [payee, setPayee] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [note, setNote] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  if (!categories) {
    return;
  }

  const createNewTransaction = async () => {
    await fetch(`http://localhost:4000/transactions`, {
      method: "POST",
      body: JSON.stringify({
        amount: amountValue ? amountValue : "",
        amountType: amountType ? amountType : "",
        payee: payee,
        categoryId: oneCategory[0].id,
        note: note,
        time: time,
        checked: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    onComplete();
  };

  return (
    <Dialog open={record}>
      <DialogContent className="max-w-[792px] w-full">
        <div className="flex justify-between items-center text-[#0F172A] border-b-2 p-4">
          <DialogTitle>Add Record</DialogTitle>
          <X
            className="cursor-pointer"
            onClick={() => {
              router.push(`?`);
            }}
          />
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
                  <Input
                    className="bg-[#D1D5DB]"
                    placeholder={"₮ 000.00"}
                    maxlength={10}
                    onChange={(e) => {
                      setAmountValue(e.target.value.replace(/[^0-9]/g, ""));
                    }}
                    value={amountValue}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Category</div>

                <Select>
                  <SelectTrigger className="bg-[#D1D5DB]">
                    {!oneCategory ? (
                      <div>
                        {amountType === "Expense" ? (
                          <>choose</>
                        ) : (
                          <>fsaklfjasdjgkl</>
                        )}
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <div>
                          <CategoryIcon
                            categoryIcon={oneCategory[0].icon}
                            IconColor={oneCategory[0].color}
                          />
                        </div>
                        <div>{oneCategory[0].name}</div>
                      </div>
                    )}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>
                        <div
                          onClick={() => {
                            router.push(`?createCategory=new`);
                          }}
                          className="p-4 bg-[#FFFFFF] cursor-pointer"
                        >
                          + Add Category
                        </div>
                      </SelectLabel>

                      {categories.map((category) => (
                        <div key={category.id}>
                          <>
                            <div
                              onClick={() => {
                                getOneCategory(category.id);
                              }}
                              className="p-4 bg-[#FFFFFF] flex gap-3 cursor-pointer "
                            >
                              <CategoryIcon
                                categoryIcon={category.icon}
                                IconColor={category.color}
                              />
                              <div>{category.name}</div>
                            </div>
                          </>
                        </div>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-2">
                  <div>Date</div>
                  <SelectDate Date={date} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div>Date</div>

                  <input
                    className="cursor-pointer bg-[#D1D5DB] rounded-lg p-2"
                    aria-label="Time"
                    type="time"
                    min="00:00"
                    max="12:00"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                createNewTransaction();
                router.push(`?`);
              }}
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
                  value={payee}
                  onChange={(e) => setPayee(e.target.value)}
                />
                <ChevronDown />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div>Note</div>

              <Textarea
                className="bg-[#D1D5DB]"
                onChange={(e) => setNote(e.target.value)}
                value={note}
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
