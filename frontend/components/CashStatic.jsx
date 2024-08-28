import { ArrowUp } from "lucide-react";
import { HeaderNav } from "./HeaderNav";

export const CashStatic = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <HeaderNav />
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex gap-6">
          <div className="max-w-[384px] w-full rounded-xl h-[216px] bg-blue-600"></div>
          <div className="max-w-[384px] w-full rounded-xl bg-[#FFFFFF]">
            <div className="border-b-2 px-6">
              <div className="py-4 flex gap-2 items-center">
                <div className="rounded-full w-2 h-2 bg-[#84CC16]"></div>
                <div className="text-[#0F172A] text-base">Your Income</div>
              </div>
            </div>
            <div className="px-6">
              <div className="pt-5">
                <div className="flex gap-1 text-[#000000] text-4xl">
                  <div>1,200,000</div>
                  <div>₮</div>
                </div>
                <div className="text-[#64748B] text-lg">Your Income Amount</div>
              </div>
              <div className="mt-4 pb-6 flex gap-1 items-center">
                <div className="w-6 h-6 rounded-full grid place-items-center bg-[#84CC16]">
                  <ArrowUp className="text-white w-4 h-4"/>
                </div>
                <div className="text-[#000000] text-lg">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
