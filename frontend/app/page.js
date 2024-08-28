import { AddNewCategory } from "@/components/AddNewCategory";
import { HeaderNav } from "@/components/HeaderNav";
import { PieDonut } from "@/components/PieDonut";

export default function Home() {
  return (
    <main>
      <HeaderNav />
      <div className="bg-slate-300">
        <AddNewCategory />
      </div>
    </main>
  );
}
