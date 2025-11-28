"use client";
import React, { useState } from "react";
import db from "../../../db.json";
import SpecialCard from "../../Module/SpecialCard";

function Index() {
  const [sortOption, setSortOption] = useState("مرتب سازی بر اساس...");

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Top bar */}
      <div className="bg-white shadow p-3 py-2 flex justify-between items-center rounded-xl">
        <h1 className="text-xl font-bold">فروشگاه</h1>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded p-2"
        >
          <option>مرتب سازی بر اساس...</option>
          <option>قیمت</option>
          <option>محبوبیت</option>
          <option>تخفیف</option>
        </select>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {db.Products.slice(0, 6).map((product) => (
          <SpecialCard key={product.id} product={product} />
        ))}
      </div>

      <div className="bg-white shadow p-4 flex justify-center items-center rounded-xl">
        <div className="flex items-center gap-4">
          <button className="text-blue-500 hover:underline">۱</button>
          <button className="text-blue-500 hover:underline">۲</button>
          <button className="text-blue-500 hover:underline">بعدی</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
