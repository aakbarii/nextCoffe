"use client"
import { useState } from "react";
import Accordion from "../../Module/Accordion";

function Accordions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      key: 1,
      label: "آیا امکان خرید به صورت حضوری وجود دارد؟",
      text: "بله، شما می‌توانید به صورت حضوری از فروشگاه ما خرید کنید.",
    },
    {
      key: 2,
      label: "امکان تعویض یا پس دادن کالا وجود دارد؟",
      text: "بله، شرایط تعویض و بازگشت کالا در صفحه قوانین و مقررات توضیح داده شده است.",
    },
    {
      key: 3,
      label: "آیا اصالت کالاها تضمین می‌شود؟",
      text: "بله، تمامی کالاهای ما دارای ضمانت اصالت هستند.",
    },
  ];

  return (
    <div className="p-4 container mx-auto">
        <div className="mt-8">
          {accordionItems.map((item, index) => (
            <Accordion
              key={item.key}
              item={item}
              index={index}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
  );
}

export default Accordions;
