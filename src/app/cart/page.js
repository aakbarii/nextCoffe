import CartItem from "@/components/Module/CartItem";
import React from "react";

function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="grid grid-cols-2 container mx-auto pt-40">
        <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
          <CartItem />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Page;
