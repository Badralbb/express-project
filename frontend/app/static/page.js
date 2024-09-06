import { CashGraphic } from "@/components/CashGraphic";
import { CashRecords } from "@/components/CashRecords";
import { CashStatic } from "@/components/CashStatic";
import { HeaderNav } from "@/components/HeaderNav";

export default function App() {
  return (
    <main className="bg-slate-200">
      <CashStatic />
      <CashGraphic />
      <CashRecords />
    </main>
  );
}
