"use client";

import { useState } from "react";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SelectDate({Date}) {
  const [date, setDate] = useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " bg-[#D1D5DB] hover:bg-[#D1D5DB] py-5 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 content-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          onChange={()=>setDate(date)}
          value={Date}
        />
        <ChevronDown className="w-6 h-6" />
      </PopoverContent>
    </Popover>
  );
}
