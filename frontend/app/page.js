import { AddNewCategory } from "@/components/AddNewCategory";
import { CategoriesList } from "@/components/CategoriesList";
import { HeaderNav } from "@/components/HeaderNav";
import { PieDonut } from "@/components/PieDonut";

export default function Home() {
  return (
    <main>
      <HeaderNav />
      <div className="bg-slate-300 py-6 rounded-lg">
        <AddNewCategory />
        
      </div>
    </main>
  );
}
