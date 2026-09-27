"use client";

import { useMenuStore } from "@/store/menuStore";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowUpLeft, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const menus = ["خدمات", "نمونه کارها", "درباره ما", "تماس با ما"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { toggle } = useMenuStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0
                z-30 
                transition-all duration-300
                ${scrolled ? "bg-background" : "bg-transparent"}`}
      >
        <div
          className="
        max-w-7xl mx-auto hidden md:flex
        px-6 h-25
        items-center justify-between
        direction-rtl"
        >
            {/* logo  */}
          <div
            className={`px-3 py-2
         text-3xl font-light tracking-widest
        ${scrolled ? "text-primary-900" : "text-white"}`}
          >
            B-Dental
          </div>
          {/* menu  */}
          <nav
            className={`
                hidden md:flex
                gap-10 items-center
                ${scrolled ? "text-primary-900" : "text-white"}`}
          >
            {menus.map((item) => (
              <a
                key={item}
                className="hover: text-primary
                                transition"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>
          {/* appoinment button  */}
          <button
            className="
                 btn-primary group"
          >
            <span>رزرو نوبت </span>
            <ArrowUpLeft
              className="
              bg-white
              rounded-full
              text-primary-900
              
                transition-transform
                duration-300
                group-hover:-rotate-45"
            />
          </button>
        </div>

        {/* mobile  */}
        <div
          className="md:hidden flex items-center
        gap-5 orfder-2"
        >
          <button onClick={toggle}>
            <Menu />
          </button>
          <div>
            <Logo />
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
