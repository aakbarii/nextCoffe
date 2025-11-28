import Image from "next/image";
import cart from "../../../../public/icons/cart.svg";

function SpecialCard({ product }) {
  return (
    <div className="container">
      <div className="w-[304px] h-[347px] mx-auto rounded-3xl mt-12 bg-gray-100 hover:shadow-normal transition-all hover:scale-105">
        <div className="pt-3">
          {product.takhfif && (
            <span className="bg-white text-emerald-700 text-sm font-medium p-2 mr-5 rounded-xl">
              {product.takhfif}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="w-52"
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-base text-center text-nowrap -px-5 overflow-hidden text-ellipsis whitespace-nowrap text-black">
            {product.title}
          </h5>
          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-900">
              {product.price && (
                <span className="text-xs deco font-thin">
                  {Number(product.price).toLocaleString()}
                </span>
              )}
              <div className="text-base font-thin">
                {Number(product.orgprice).toLocaleString()}
                <span className="text-xs pr-1">تومان</span>
              </div>
            </span>
            <button className="flex items-center justify-center mt-5 mb-2 gap-x-1 text-white bg-emerald-700 hover:bg-emerald-800 rounded-2xl text-xs px-2 py-2 transition-colors">
              <span className="text-sm">افزودن به</span>
              <Image src={cart} alt="Add to cart" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;
