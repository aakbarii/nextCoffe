"use client";
import { useState } from "react";
import Image from "next/image";

// Importing icon images
import { shopIcon, waiteCoffeeIcon } from "../../../../public/icons";
import { hero, hero_2, hero_3 } from "../../../../public/image";

function HeroSection() {
  const [image, setImage] = useState(hero);

  const handleImageChange = (image) => {
    setImage(image);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-36 mr-8 relative font-dana">
      <div className="md:mt-24 md:mr-16">
        <h4 className="md:text-4xl text-2xl">آنلاین شاپ تخصصی</h4>
        <h1 className="font-bold md:text-5xl text-3xl pt-2 pb-4 w-full">
          انواع قـهوه و لـوازم کافـی شاپ
        </h1>
        <p className="text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <div className="md:mt-10 mt-5 flex gap-x-6">
          <button className="flex items-center rounded-3xl bg-emerald-600 text-white p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
            <Image
              src={waiteCoffeeIcon}
              width={20}
              height={20}
              alt="Coffee Icon"
              className="ml-1"
            />
            ترکیب شفارشی
          </button>
          <button className="flex items-center rounded-3xl text-emerald-600 bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
            <Image
              src={shopIcon}
              width={20}
              height={20}
              alt="Shop Icon"
              className="ml-1"
            />
            خرید کنید
          </button>
        </div>
        <svg
          className="absolute w-16 md:w-24 mr-72 md:mr-96 md:right-72 md:top-96 md:mt-32"
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="39"
          viewBox="0 0 105 39"
          fill="none"
        >
          <path
            d="M95.1933 33.6178C78.4485 35.4304 63.9298 28.7802 54.8275 14.4575C50.1671 7.12422 60.4832 -4.05281 65.0611 4.62904C69.3301 12.725 55.0674 22.5138 49.1029 23.9446C36.1617 27.0492 23.7465 25.9621 10.6832 25.6763"
            stroke="#007E57"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M8.05666 29.2259C6.68215 28.2923 -0.797219 24.8648 3.03587 23.5652C4.98949 22.9028 6.89411 21.5029 8.85213 20.714"
            stroke="#007E57"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M95.4087 37.9489C96.1831 37.5528 103.065 35.1419 103.379 34.1294C103.665 33.2043 102.137 33.0581 101.618 32.6016C100.217 31.3683 99.0733 31.117 98.031 29.4769"
            stroke="#007E57"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <div className="absolute md:right-28 md:top-96 top-50 mt-96 md:mt-10 pt-72 md:pt-0 flex items-center content-center text-center">
        <div className="flex items-center gap-x-3">
          <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-gray-100">
            <div onClick={() => handleImageChange(hero)}>
              <Image src={hero} width={128} height={128} alt="Coffee" />
            </div>
          </div>
          <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-gray-100">
            <div onClick={() => handleImageChange(hero_2)}>
              <Image src={hero_2} width={128} height={128} alt="Other" />
            </div>
          </div>
          <div className=" w-16 h-16 md:w-32 md:h-32 rounded-full bg-gray-100">
            <div onClick={() => handleImageChange(hero_3)}>
              <Image src={hero_3} width={128} height={128} alt="Shop" />
            </div>
          </div>
        </div>
      </div>
      <div className="order-first md:order-last flex items-center content-center text-center ml-14 h-80 md:h-96 md:mt-28 mb-5 md:mb-0">
        <Image src={image} width={600} height={638} alt="Selected" />
      </div>
    </div>
  );
}

export default HeroSection;
