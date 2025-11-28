import Image from "next/image";
import db from "../../../db.json";
import Link from "next/link";
import {
  checkboxIcon,
  questionIcon,
  shopIcon,
} from "../../../../public/icons";
import { coffe, coffe_2 } from "../../../../public/image";
import ProductsSliderClient from "./ProductsSliderClient";

function AboutShop() {
  return (
    <div className="bg-[#1b1b1d] mt-[-150px] min-h-[1780px] text-white pt-52 pb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col justify-center px-8">
          <div className="flex items-center gap-x-2">
            <h3 className="text-3xl md:text-4xl font-bold">درباره فروشگاه ما</h3>
            <Image
              className="w-10"
              src={questionIcon}
              alt="آیکون"
              width={40}
              height={40}
            />
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.
            </p>
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </p>
          </div>
          <div className="md:mt-10 mt-5 flex gap-x-6">
            <Link
              href="/shop"
              className="flex items-center rounded-3xl bg-emerald-600 text-white p-2 px-5 md:p-2 md:px-5 text-xs md:text-base hover:bg-emerald-700 transition-colors"
            >
              <Image
                src={shopIcon}
                alt="فروشگاه ما"
                width={20}
                height={20}
                className="ml-1"
              />
              فروشگاه ما
            </Link>
            <Link
              href="/call-to-us"
              className="flex items-center rounded-3xl text-emerald-600 bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base hover:bg-emerald-600 hover:text-white transition-colors"
            >
              <Image
                src={questionIcon}
                alt="سوالی دارید؟"
                width={20}
                height={20}
                className="ml-1"
              />
              سوالی دارید؟
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Image
            className="h-auto w-full max-w-[640px] rounded-3xl hover:scale-105 transition-transform"
            src={coffe_2}
            alt="تصویر کافه"
            width={640}
            height={600}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              className="h-auto w-full max-w-[640px] rounded-3xl hover:scale-105 transition-transform"
              src={coffe}
              alt="تصویر کافه"
              width={640}
              height={600}
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-0 text-center lg:text-right">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">آیا علاقه‌مند به همکاری هستید؟</h3>
          <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.
            </p>
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
            <p className="text-gray-300 leading-7 text-base md:text-lg">
              برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </p>
          </div>
          <Link
            href="/call-to-us"
            className="mt-8 inline-block rounded-xl bg-emerald-600 text-white p-3 px-8 hover:bg-emerald-700 transition-colors shadow-normal font-semibold"
          >
            تماس با ما
          </Link>
        </div>
      </div>
      <div className="container mt-16 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">محصولات فروشگاه</h3>
        <div className="relative">
          <ProductsSliderClient products={db.Products.slice(0, 8)} />
        </div>
      </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/shop"
            className="inline-block rounded-3xl text-emerald-600 bg-slate-100 hover:bg-emerald-600 hover:text-white p-3 px-8 md:p-3 md:px-10 text-sm md:text-base transition-all font-semibold shadow-normal"
          >
            مشاهده همه محصولات
          </Link>
        </div>
    </div>
  );
}

export default AboutShop;
