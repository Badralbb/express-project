import { CashGraphic } from "@/components/CashGraphic";
import { CashStatic } from "@/components/CashStatic";

export default function App() {
  return (
    <main className="bg-slate-200">
      <CashStatic />
      <CashGraphic />
    </main>
  );
}
