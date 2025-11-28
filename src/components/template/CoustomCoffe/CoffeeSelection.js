"use client";
import React, { useState } from "react";
import CountryCard from "../../Module/CountryCard";
import GrennHeder from "../../Module/GrennHeder";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import CoffeeCard from "../../Module/WightCoffeeCard";

const CoffeeSelection = () => {
  const [arabicaValue, setArabicaValue] = useState(50); // مقدار پیش‌فرض عربیکا
  const [robustaValue, setRobustaValue] = useState(50); // مقدار پیش‌فرض روبوستا

  const countries = [
    {
      country: "Peru",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
      nativeName: "پرو",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Colombia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
      nativeName: "کلمبیا",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Kenya",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
      nativeName: "کنیا",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      nativeName: "هند",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Vietnam",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
      nativeName: "ویتنام",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Indonesia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
      nativeName: "اندونزی",
      roast: "رست",
      level: "مدیوم",
    },
  ];

  const firstRow = countries.slice(0, 3);
  const secondRow = countries.slice(3);

  return (
    <div className="w-full mt-20 bg-white rounded-2xl">
      <div className="p-4 flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1 mt-6">
            <h3 className="text-2xl text-green-800">نژاد عربیکا:</h3>
            <p className="text-sm text-gray-600 pt-2">
              در اینجا می‌توانید نژاد قهوه عربیکا خود را در بین گزینه‌های مقابل
              انتخاب نمایید.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {firstRow.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex items-center md:flex-row justify-between gap-4">
          <div className="flex-1 mt-6">
            <div className="flex flex-col">
              <h3 className="text-2xl text-green-800">نژاد روبوستا:</h3>
              <p className="text-sm text-gray-600 pt-2">
                در اینجا می‌توانید نژاد قهوه روبوستای خود را در بین گزینه‌های
                مقابل انتخاب نمایید.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {secondRow.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
          </div>
        </div>
        {/* تنظیم ترکیبات قهوه */}
        <div>
          <GrennHeder size="text-3xl" text="تنظیم ترکیبات قهوه" />
        </div>
        <div className="flex items-center mt-8">
          <div className="flex flex-col">
            <h3 className="text-2xl text-green-800">درصد ترکیب عربیکا :</h3>
            <p className="text-sm text-gray-600 pt-2">
              میزان قهوه عربیکا در ترکیب سفارشی خود را به درصد انتخاب نمایید
            </p>
          </div>
          <div className="w-full">
            <RangeSlider
              min={0}
              max={100}
              step={10}
              value={[arabicaValue]} // فقط یک مقدار
              onInput={(value) => setArabicaValue(value[0])} // مقدار انتخاب‌شده
              className="w-full"
              thumbClassName="bg-green-600"
              trackClassName="bg-gray-200"
            />
            <div className="flex justify-between text-sm text-green-800 mt-2">
              {Array.from({ length: 11 }, (_, i) => i * 10).map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>
          </div>
        </div>
        {/* اسلایدر تنظیم روبوستا */}
        <div className="flex items-center mt-8">
          <div>
            <h3 className="text-2xl text-green-800">درصد ترکیب روبوستا :</h3>
            <p className="text-sm text-gray-600 pt-2">
              میزان قهوه روبوستا در ترکیب سفارشی خود را به درصد انتخاب نمایید .
            </p>
          </div>
          <div className="w-full">
            <RangeSlider
              min={0}
              max={100}
              step={10}
              value={[robustaValue]}
              onInput={(value) => setRobustaValue(value[0])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-green-800 mt-2">
              {Array.from({ length: 11 }, (_, i) => i * 10).map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mb-8">
          <div>
            <h3 className="text-2xl text-green-800">وزن بسته قهوه شما:</h3>
            <p className="text-sm text-gray-600">
              وزن بسته ترکیب خود را از بین گزینه‌های مقابل انتخاب نمایید.
            </p>
          </div>
          {/* کارت‌های وزن قهوه */}
          <div className="flex gap-4 justify-center">
            <div className="w-1/3">
              <CoffeeCard
                imageSrc="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-72.png"
                weight="100 گرم"
                description="قهوه عربیکا و روبوستا"
              />
            </div>
            <div className="w-1/3">
              <CoffeeCard
                imageSrc="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-72.png"
                weight="150 گرم"
                description="قهوه عربیکا و روبوستا"
              />
            </div>
            <div className="w-1/3">
              <CoffeeCard
                imageSrc="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-72.png"
                weight="250 گرم"
                description="قهوه عربیکا و روبوستا"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-emerald-700 w-24 h-7 rounded-xl text-white">
            مرحله بعد
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
