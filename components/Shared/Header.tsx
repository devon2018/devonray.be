"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import logo from "../../public/logo.svg";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { usePathname } from "next/navigation";

interface MenuProps {
  introId?: string;
  activeLang?: "en" | "nl" | "fr";
  items: { title: string; link: string }[];
  keyword?: string;
  mobileLabel?: string;
}

const Header = ({
  keyword = "Freelance Software Developer",
  mobileLabel = "Open Menu",
  activeLang = "en",
  items = [],
  introId = "#intro",
}: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const urlPrefix = useMemo(() => {
    switch (activeLang) {
      case "nl":
        return "/nl/freelance-software-ontwikkelaar";
      case "fr":
        return "/fr/developpeur-logiciel-freelance";
      default:
        return "/en/freelance-software-developer";
    }
  }, [activeLang]);

  return (
    <header className="rounded-3xl md:rounded-full bg-black w-[96vw] max-w-[900px] mx-auto fixed top-4 flex items-center justify-between min-h-14 overflow-hidden left-[50%] -translate-x-1/2 shadow-xl z-[999] flex-wrap py-3 md:py-0 transition-all ease-out">
      <Link href={`${urlPrefix}${introId}`} className="ml-5">
        <Image
          src={logo}
          alt={`Devon Ray - ${keyword}`}
          className="max-h-[30px] max-w-[170px]"
        />
      </Link>
      <div className="text-sm flex items-center justify-center space-x-1">
        <Link
          href="/en"
          className="nav-lang-link"
          data-active={activeLang === "en"}
        >
          EN
        </Link>{" "}
        <div>/</div>
        <Link
          href="/nl"
          className="nav-lang-link"
          data-active={activeLang === "nl"}
        >
          NL
        </Link>{" "}
        <div>/</div>
        <Link
          href="/fr"
          className="nav-lang-link"
          data-active={activeLang === "fr"}
        >
          FR
        </Link>
        {/* <span className="text-primary">EN</span> / NL / FR */}
      </div>
      <button
        className="mr-4 block md:hidden"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <LuMenu size={30} className="text-[#3FB3A0]" />
        <span className="sr-only">{mobileLabel}</span>
      </button>
      <div
        className="space-y-2 md:space-y-0 md:space-x-2 mx-3 md:mx-0 md:mr-2 hidden md:flex data-[mobile-shown=true]:block md:data-[mobile-shown=true]:flex w-full md:w-auto mt-4 md:mt-0 transition-all ease-out"
        data-mobile-shown={showMenu}
      >
        {items.map((ii, ind) => (
          <Link
            href={`${urlPrefix}${ii.link}`}
            className="nav-link"
            scroll
            key={ind}
          >
            {ii.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
