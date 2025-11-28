import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Module/Navbar";

const Dana = localFont({
  src: [
    {
      path: "./fonts/Dana/DanaFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Dana/Dana-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const Rokh = localFont({
  src: [
    {
      path: "./fonts/Rokh/RokhFaNum-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rokh/RokhFaNum-SemiBold.woff2",
      weight: "550",
      style: "normal",
    },
    {
      path: "./fonts/Rokh/RokhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "کافی شاپ",
  description: "کافی شاپ اکبر و ابول برای رزومه کار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Dana.className} ${Rokh.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
