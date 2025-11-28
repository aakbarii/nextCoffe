import Image from "next/image";
import React from "react";

const CoffeeCard = ({ imageSrc, weight, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4  flex items-center h-28 w-72">
      <Image
        width={128}
        height={100}
        src={imageSrc}
        alt={`Coffee ${weight}`}
        className="w-32 h-24 object-contain rounded-xl"
      />
      <div className="flex-1 text-left">
        <p className="text-xl text-black text-right text-nowrap">
          {weight}
        </p>
        <p className="text-sm text-gray-600 text-right text-nowrap">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoffeeCard;
