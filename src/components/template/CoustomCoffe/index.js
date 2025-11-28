import Image from "next/image";
import Link from "next/link";
import {
  arrowImg,
  sunImg,
  coffeeMashinImg,
  coffeeImg,
  plantsImg,
  plantImg,
} from "../../../../public/image";

function CoustomCoffe() {
  return (
    <>
      {/* Title */}
      <div className="flex items-center justify-center text-center mb-8 md:mb-10 pt-6 md:pt-10 px-4">
        <div className="flex items-center gap-x-1 md:gap-x-2">
          <Image 
            src={plantsImg} 
            alt="Plants" 
            width={50} 
            height={50}
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <h3 className="text-2xl md:text-4xl font-bold">ترکیب سفارشی</h3>
          <Image 
            src={plantImg} 
            alt="Plant" 
            width={50} 
            height={50}
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </div>
      </div>

      {/* Coffee Steps */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-4 mt-8 md:mt-12 mx-auto px-4 max-w-6xl">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:w-auto">
          <div className="w-24 h-24 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center hover:scale-110 transition-transform shrink-0 shadow-sm">
            <Image
              className="w-14 h-14 md:w-16 md:h-16"
              src={sunImg}
              alt="Sun"
              width={64}
              height={64}
            />
          </div>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center md:text-right">انتخاب نوع و نژاد قهوه</p>
        </div>

        <Image 
          src={arrowImg} 
          alt="Arrow" 
          width={24} 
          height={24} 
          className="hidden md:block"
        />

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:w-auto">
          <div className="w-24 h-24 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center hover:scale-110 transition-transform shrink-0 shadow-sm">
            <Image
              className="w-14 h-14 md:w-16 md:h-16"
              src={coffeeMashinImg}
              alt="Coffee Machine"
              width={64}
              height={64}
            />
          </div>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center md:text-right">تنظیم درصد رست و ترکیب</p>
        </div>

        <Image
          src={arrowImg}
          alt="Arrow"
          width={24}
          height={24}
          className="hidden md:block"
        />

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:w-auto">
          <div className="w-24 h-24 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center hover:scale-110 transition-transform shrink-0 shadow-sm">
            <Image
              className="w-14 h-14 md:w-16 md:h-16"
              src={coffeeImg}
              alt="Coffee"
              width={64}
              height={64}
            />
          </div>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center md:text-right">انتخاب سفارش و تحویل بسته</p>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-10 px-4">
        <Link
          href="/costom"
          className="rounded-3xl text-white bg-emerald-600 hover:bg-emerald-700 p-3 px-6 md:p-2 md:px-5 text-sm md:text-base transition-colors shadow-normal font-semibold"
        >
          مشاهده همه
        </Link>
      </div>
    </>
  );
}

export default CoustomCoffe;
