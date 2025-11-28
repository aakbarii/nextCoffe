import Image from "next/image";

function CartItem() {
  return (
    <div className="grid grid-cols-5 items-center gap-4 border-b border-gray-200 py-4">
      {/* محصول */}
      <div className="flex items-center gap-4 col-span-2">
        <button
          className="text-red-500 text-lg hover:text-red-700 transition"
          aria-label="حذف"
        >
          &times;
        </button>
        <Image
          src="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/product-6-min.png"
          alt="محصول"
          className="w-14 h-14 object-cover rounded"
          width={56}
          height={56}
        />
        <span className="text-gray-800 text-sm font-medium">
          پودر قهوه ترک ویژه عربیکا 70 درصد مقدار 450 گرم
        </span>
      </div>

      {/* قیمت */}
      <div className="text-center text-green-700 text-sm font-medium">
        ۱۴۰,۰۰۰ تومان
      </div>

      {/* تعداد */}
      <div className="flex justify-center">
        <input
          type="number"
          defaultValue={1}
          min={1}
          className="w-12 text-center border border-gray-300 rounded-md focus:ring-green-400 focus:border-green-400"
        />
      </div>

      {/* جمع جزء */}
      <div className="text-center text-green-700 text-sm font-medium">
        ۱۴۰,۰۰۰ تومان
      </div>

      {/* دکمه حذف */}
    </div>
  );
}
export default CartItem;
