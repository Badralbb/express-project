"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";

import { PlusSvg } from "./Plus";
import { RecordDialog } from "./RecordDialog";
import { useRouter, useSearchParams } from "next/navigation";

export const HeaderNav = () => {
  const router = useRouter();

  return (
    <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center py-4">
      <div className="flex gap-6 items-center">
        <div>
          <Image src={"/images/Header.svg"} width={40} height={40} />
        </div>
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6">
        <Button
          onClick={() => router.push(`?create=new`)}
          className="flex gap-1 bg-[#0166FF] items-center rounded-3xl hover:bg-blue-700"
        >
          <PlusSvg color={"#ffffff"} />
          <div>Record</div>
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <RecordDialog />  
    </div>
  );
};
