import Image from "next/image";
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
      <div className="flex items-center justify-center text-center mt-96 mb-10 pt-96">
        <div className="flex items-center gap-x-2">
          <Image src={plantsImg} alt="Plants" width={50} height={50} />
          <h3 className="text-4xl font-bold">ترکیب سفارشی</h3>
          <Image src={plantImg} alt="Plant" width={50} height={50} />
        </div>
      </div>

      {/* Coffee Image */}
      <div className="flex gap-x-8 mt-12 mx-32">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
          <Image
            className="w-24 h-24"
            src={sunImg}
            alt="Sun"
            width={96}
            height={96}
          />
        </div>
        <p className="text-xl font-semibold">انتخاب نوع و نژاد قهوه</p>

        <Image src={arrowImg} alt="Arrow" width={24} height={24} />

        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
          <Image
            className="w-24 h-24"
            src={coffeeMashinImg}
            alt="Coffee Machine"
            width={96}
            height={96}
          />
        </div>
        <p className="text-xl font-semibold">تنظیم درصد رست و ترکیب</p>

        <Image
          className="Arrow"
          src={arrowImg}
          alt="Arrow"
          width={24}
          height={24}
        />

        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
          <Image
            className="w-24 h-24"
            src={coffeeImg}
            alt="Coffee"
            width={96}
            height={96}
          />
        </div>
        <p className="text-xl font-semibold">انتخاب سفارش و تحویل بسته</p>
      </div>

      <div className="flex justify-center mt-10">
        <button className="rounded-3xl text-white bg-emerald-600 hover:text-emerald-600 hover:bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base transition-colors">
          مشاهده همه
        </button>
      </div>
    </>
  );
}

export default CoustomCoffe;
