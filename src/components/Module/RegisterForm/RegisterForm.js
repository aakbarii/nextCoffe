import React from "react";

const RegisterForm = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-[624px]">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            نام کاربری *
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            آدرس ایمیل *
          </label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            گذرواژه *
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded-md bg-gray-100"
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 cursor-pointer">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="64"></circle><path d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"></path></svg>
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از
          تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ حریم خصوصی
          توضیح داده شده است.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-1/2 bg-emerald-700 text-white py-2.5 px-5 rounded-md hover:bg-green-700 transition"
          >
            عضویت
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
