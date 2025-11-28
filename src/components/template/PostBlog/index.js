import React from "react";
import Image from "next/image";
import { postImg } from "../../../../public/image";

const PostComponent = () => {
  const posts = [
    {
      id: 1,
      title: "رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود",
      date: "۱۶ مهر ۱۴۰۱",
      comments: "بدون دیدگاه",
      image: postImg,
    },
    {
      id: 2,
      title: "جدیدترین رنگ‌رهای شیاومی طراحی آن را شگفت‌انگیز می‌کنند",
      date: "۱۶ مهر ۱۴۰۱",
      comments: "۲ دیدگاه",
      image: postImg,
    },
    {
      id: 3,
      title: "بررسی ادوپرفیوم ویکتوریا سکرت",
      date: "۱۶ مهر ۱۴۰۱",
      comments: "بدون دیدگاه",
      image: postImg,
    },
    {
      id: 4,
      title: "۱۰ بازیگر که با نقش‌های منفی جایزه اسکار گرفتند",
      date: "۱۶ مهر ۱۴۰۱",
      comments: "بدون دیدگاه",
      image: postImg,
    },
    {
      id: 5,
      title: "۶ تکنولوژی که دیرتر از رقبا به آیفون آمدند",
      date: "۱۶ مهر ۱۴۰۱",
      comments: "بدون دیدگاه",
      image: postImg,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-6 w-full">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`${
            index < 2 ? "lg:col-span-3 h-64" : "lg:col-span-2 h-48"
          } border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative`}
        >
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
          <div className="p-4 absolute bottom-0 bg-opacity-75 w-full">
            <div className="text-sm text-white flex justify-center gap-x-2">
              <span>📆{post.date}</span>
              <span>💬{post.comments}</span>
            </div>
            <h2 className="text-sm text-center text-white mb-2">{post.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
