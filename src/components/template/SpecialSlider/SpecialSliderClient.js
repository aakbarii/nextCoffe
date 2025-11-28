"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SpecialCard from "../../Module/SpecialCard";
import "swiper/css";

function SpecialSliderClient({ products }) {
  return (
    <Swiper
      className="flex"
      spaceBetween={20} // فاصله بین اسلایدها
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      breakpoints={{
        1200: {
          slidesPerView: 4, // تعداد کارت‌ها در صفحه نمایش بزرگ
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
      }}
    >
      {products.map((product) =>
        product.price ? (
          <SwiperSlide key={product.id} className="flex justify-center">
            <SpecialCard product={product} />
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
}

export default SpecialSliderClient;
