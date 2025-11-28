import Image from 'next/image';
import React from 'react';

const Card = ({ imageSrc, title, description, additionalStyles }) => {
  return (
    <div className={`w-52 h-[238px] rounded-3xl bg-gray-100 shadow-md text-center p-4 ${additionalStyles}`}>
      <div className="mb-4">
        <Image src={imageSrc} alt={title} className="size-[72px] mx-auto" height={72} width={72} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
