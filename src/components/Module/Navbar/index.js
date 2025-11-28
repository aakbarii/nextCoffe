"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HomeDrawer from "../Drawer/HomeDrawer";

// Icons & Images
import { appLogo } from "../../../../public/image";
import {
  homeIcon,
  shopIcon,
  coffeeIcon,
  infoIcon,
  phoneIcon,
  articleIcon,
  userIcon,
  cartIcon,
  searchIcon,
  menuIcon,
} from "../../../../public/icons";

// Constants
const NAV_ITEMS = [
  { id: 1, name: "صفحه اصلی", icon: homeIcon, path: "/" },
  { id: 2, name: "فروشگاه", icon: shopIcon, path: "/shop" },
  { id: 3, name: "سفارش قهوه", icon: coffeeIcon, path: "/costom" },
  { id: 4, name: "وبلاگ", icon: articleIcon, path: "/blog" },
  { id: 5, name: "درباره ما", icon: infoIcon, path: "/about-us" },
  { id: 6, name: "تماس با ما", icon: phoneIcon, path: "/call-to-us" },
];

const ICON_SIZE = {
  small: 20,
  medium: 24,
  large: 26,
};

const LOGO_SIZE = {
  desktop: 52,
  mobile: 50,
};

// Sub-components
const NavItem = ({ item, isMobile = false }) => (
  <li className="flex items-center gap-x-2">
    <Image
      src={item.icon}
      alt={item.name}
      width={ICON_SIZE.small}
      height={ICON_SIZE.small}
      className="shrink-0"
    />
    <Link
      href={item.path}
      className={`text-nowrap transition-colors hover:text-brown-600 ${
        isMobile ? "text-lg text-gray-800" : "text-gray-300"
      }`}
    >
      {item.name}
    </Link>
  </li>
);

const NavItemsList = ({ items, isMobile = false }) => (
  <ul
    className={
      isMobile
        ? "mt-4 flex flex-col items-start gap-y-4"
        : "flex lg:gap-x-9 gap-x-5 tracking-tighter child:leading-[56px]"
    }
  >
    {items.map((item) => (
      <NavItem key={item.id} item={item} isMobile={isMobile} />
    ))}
  </ul>
);

const UserIconButton = ({ icon, alt, href, size = ICON_SIZE.small }) => {
  const iconButton = (
    <span className="rounded-full flex items-center justify-center w-9 h-9 bg-brown-900 hover:bg-brown-600 transition-colors cursor-pointer">
      <Image src={icon} alt={alt} width={size} height={size} />
    </span>
  );

  return href ? (
    <Link href={href} aria-label={alt}>
      {iconButton}
    </Link>
  ) : (
    <button aria-label={alt} type="button">
      {iconButton}
    </button>
  );
};

const UserIcons = () => (
  <div dir="rtl" className="flex gap-x-3 items-center">
    <UserIconButton icon={userIcon} alt="حساب کاربری" />
    <UserIconButton icon={cartIcon} alt="سبد خرید" href="/cart" size={25} />
  </div>
);

const SearchBar = () => (
  <div dir="rtl" className="flex items-center">
    <input
      type="text"
      placeholder="جستجو..."
      className="rounded-r-3xl p-2 px-12 outline-none focus:ring-2 focus:ring-brown-300 transition-all"
      aria-label="جستجو"
    />
    <span className="rounded-l-3xl bg-white p-2 flex items-center justify-center">
      <Image
        src={searchIcon}
        alt="جستجو"
        width={ICON_SIZE.medium}
        height={ICON_SIZE.medium}
      />
    </span>
  </div>
);

const MobileMenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    aria-label="باز کردن منو"
    className="text-zinc-900 dark:text-white p-2"
  >
    <Image
      src={menuIcon}
      alt="منو"
      width={ICON_SIZE.large}
      height={ICON_SIZE.large}
    />
  </button>
);

// Main Component
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const mobileNavContent = <NavItemsList items={NAV_ITEMS} isMobile={true} />;

  return (
    <>
      {/* Desktop Header */}
      <header className="container m-auto absolute top-5 right-0 left-0 bg-gray-100 rounded-3xl hidden md:flex lg:flex items-center md:w-[85%] w-[90%] h-20 mx-auto lg:px-10 px-5 z-50">
        <div className="flex w-full items-center justify-between">
          <nav className="flex lg:gap-x-9 gap-x-5 items-center h-14">
            <Link href="/" className="shrink-0" aria-label="صفحه اصلی">
              <Image
                src={appLogo}
                alt="لوگو کافی شاپ"
                width={LOGO_SIZE.desktop}
                height={LOGO_SIZE.desktop}
                priority
              />
            </Link>
            <NavItemsList items={NAV_ITEMS} />
          </nav>

          <div className="flex items-center gap-x-4">
            <SearchBar />
            <UserIcons />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between bg-gray-100 m-auto absolute top-5 right-0 left-0 lg:w-[85%] w-[90%] h-20 mx-auto lg:px-10 px-5 rounded-4xl z-50">
        <MobileMenuButton onClick={handleMenuClick} />

        <HomeDrawer
          content={mobileNavContent}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />

        <Link href="/" className="flex items-center justify-center" aria-label="صفحه اصلی">
          <Image
            src={appLogo}
            alt="لوگو کافی شاپ"
            width={LOGO_SIZE.mobile}
            height={LOGO_SIZE.mobile}
            priority
          />
        </Link>

        <UserIcons />
      </div>
    </>
  );
}

export default Navbar;
