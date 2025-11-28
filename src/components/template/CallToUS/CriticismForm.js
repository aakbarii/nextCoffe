import React from "react";

function CriticismForm() {
  return (
    <div className="bg-gray-50 p-6 rounded-xl w-[460px] h-[420px]">
      <h2 className="text-lg mb-4">پذیرای انتقادات و پیشنهادات شما هستیم.</h2>
      <form>
        <div className="mb-4">
          <input
            placeholder="نام و نام خانوادگی :"
            type="text"
            id="name"
            className="w-full p-2 focus:outline-none focus:ring focus:ring-green-200 rounded-3xl"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="پست الکترونیکی :"
            type="email"
            id="email"
            className="w-full p-2 focus:outline-none focus:ring focus:ring-green-200 rounded-3xl"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="موضوع پیام :"
            type="text"
            id="subject"
            className="w-full p-2 focus:outline-none focus:ring focus:ring-green-200 rounded-3xl"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="متن پیام :"
            id="message"
            rows="4"
            className="w-full p-2 focus:outline-none focus:ring focus:ring-green-200 rounded-3xl"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-emerald-700 text-white font-bold py-2 rounded-3xl hover:bg-green-700 transition"
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
}

export default CriticismForm;
