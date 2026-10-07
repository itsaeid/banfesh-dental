"use client";

import { useMenuStore } from "@/store/menuStore";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowUpLeft, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import PrimaryButton from "../ui/PrimaryButton";

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
        className={`fixed top-0 right-0 left-0 z-100 transition-all duration-300 ${scrolled ? "bg-background" : "bg-transparent"}`}
      >
        <div className="direction-rtl mx-auto hidden h-25 max-w-7xl items-center justify-between px-6 md:flex">
          {/* logo  */}
          <div
            className={`px-3 py-2 text-3xl font-light tracking-widest ${scrolled ? "text-primary-900" : "text-white"}`}
          >
            B-Dental
          </div>
          {/* menu  */}
          <nav className={`hidden items-center gap-10 md:flex ${scrolled ? "text-primary-900" : "text-white"}`}>
            {menus.map((item) => (
              <a key={item} className="hover: text-primary transition" href="#">
                {item}
              </a>
            ))}
          </nav>
          {/* appoinment button  */}
         <PrimaryButton text="رزرو نوبت" />
        </div>

        {/* mobile  */}
        <div className="order-2 flex items-center gap-5 md:hidden">
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
