import Image from "next/image";
import SpecialCard from "../../Module/SpecialCard";
import db from "../../../db.json";
import Link from "next/link";
import {
  checkboxIcon,
  questionIcon,
  shopIcon,
} from "../../../../public/icons";
import { coffe, coffe_2 } from "../../../../public/image";

function AboutShop() {
  return (
    <div className="bg-[#1b1b1d] mt-[-150px] h-[1780px] text-white pt-52">
      <div className="container grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <Image
              className="w-10 h-10"
              src={checkboxIcon}
              alt="آیکون"
              width={40}
              height={40}
            />
            <h3 className="text-4xl font-bold">درباره فروشگاه ما</h3>
            <Image
              className="w-10"
              src={questionIcon}
              alt="آیکون"
              width={40}
              height={40}
            />
          </div>
          <div className="mt-6">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...</p>
          </div>
          <div className="md:mt-10 mt-5 flex gap-x-6">
            <Link href="/shop">
              <p className="flex items-center rounded-3xl bg-emerald-600 text-white p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
                <Image
                  src={shopIcon}
                  alt="فروشگاه ما"
                  width={20}
                  height={20}
                  className="ml-1"
                />
                فروشگاه ما
              </p>
            </Link>
            <Link href="/faq">
              <p className="flex items-center rounded-3xl text-emerald-600 bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
                <Image
                  src={questionIcon}
                  alt="سوالی دارید؟"
                  width={20}
                  height={20}
                  className="ml-1"
                />
                سوالی دارید؟
              </p>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="h-[600px] w-[640px]"
            src={coffe_2}
            alt="تصویر کافه"
            width={640}
            height={600}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <Image
              className="h-[600px] w-[640px]"
              src={coffe}
              alt="تصویر کافه"
              width={640}
              height={600}
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-3xl">آیا علاقه‌مند به همکاری هستید؟</h3>
          <p className="mt-4 text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
          </p>
          <Link href="/contact">
            <p className="mt-4 inline-block rounded-xl bg-emerald-600 text-white p-2 px-5">
              تماس با ما
            </p>
          </Link>
        </div>
      </div>
      <div className="container mt-10">
        <h3 className="text-3xl text-center">محصولات فروشگاه</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {db.Products.slice(0, 8).map((product) => (
            <SpecialCard key={product.id} product={product} />
          ))}
        </div>
      </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="grid my-10 rounded-3xl text-emerald-600 bg-slate-100 hover:bg-emerald-600 hover:text-white p-2 px-5 md:p-2 md:px-5 text-xs md:text-base transition-all"
          >
            مشاهده همه
          </Link>
        </div>
    </div>
  );
}

export default AboutShop;
