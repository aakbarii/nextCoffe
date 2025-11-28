import Image from 'next/image';
import React from 'react';

const CountryCard = ({ country, flag, nativeName, roast, level }) => {
  return (
    <div className="flex bg-gray-50 rounded-lg p-4 w-72 h-32">
      <Image
        src={flag}
        alt={`${country} flag`}
        className="size-24 rounded-xl object-cover"
        width={96}
        height={96}
      />
      <div className="flex flex-col justify-center items-center text-center mr-4">
        <h2 className="text-2xl text-gray-800 mb-2">{country}</h2>
        <p className="text-sm text-gray-600 mb-1">خواستگاه: {nativeName}</p>
        <p className="text-sm text-gray-600">{roast} : {level}</p>
      </div>
    </div>
  );
};

export default CountryCard;