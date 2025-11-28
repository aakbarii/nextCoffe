"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SpecialCard from "../../Module/SpecialCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductsSliderClient({ products }) {
  return (
    <div className="relative">
      <Swiper
        className="!pb-12"
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <SpecialCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="قبلی"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <button
        className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="بعدی"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductsSliderClient;

