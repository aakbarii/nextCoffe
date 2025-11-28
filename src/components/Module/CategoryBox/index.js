import Image from "next/image";
import Link from "next/link";
import {
  boxIcon,
  elmIcon,
  gameIcon,
  honarIcon,
  ketabIcon,
  montakhabIcon,
  sabkIcon,
} from "../../../../public/icons";

const CategoryBox = () => {
  const categories = [
    { id: 1, name: "هنر و سینما", icon: honarIcon },
    { id: 2, name: "منتخب سردبیر", icon: montakhabIcon },
    { id: 3, name: "کتاب و ادبیات", icon: boxIcon },
    { id: 4, name: "علم و تکنولوژی", icon: ketabIcon },
    { id: 5, name: "سبک زندگی", icon: sabkIcon },
    { id: 6, name: "بازی ویدئویی", icon: gameIcon },
    { id: 7, name: "آن‌باکس محصولات", icon: elmIcon },
  ];

  return (
    <div className="w-full max-w-[288px] h-auto min-h-[360px] p-4 bg-white border rounded-lg shadow-normal hover:shadow-lg transition-shadow">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href="/blog"
              className="flex items-center justify-between text-gray-700 hover:text-emerald-600 h-8 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Image alt={category.name} src={category.icon} width={20} height={20} />
                <span className="text-sm font-medium">{category.name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBox;
