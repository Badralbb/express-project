"use client";
import { AddNewCategory } from "@/components/AddNewCategory";
import { CategoriesList } from "@/components/CategoriesList";
import { HeaderNav } from "@/components/HeaderNav";

export default function Home() {
  return (
    <main>
      <HeaderNav />
      <div className="bg-slate-300 py-6 rounded-lg border-none">
        <AddNewCategory />
      </div>
    </main>
  );
}
