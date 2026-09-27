"use client"
import { useMenuStore } from "@/store/menuStore";
import { X } from "lucide-react";

const menus = ["خدمات", "نمونه کارها", "درباره ما", "تماس با ما"];

export default function MobileMenu() {
  const { open, close } = useMenuStore();
  return (
    <>
      <div
        onClick={close}
        className={`
        fixed inset-0 bg-black/40 z-40 transition-opacity 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>
      <div
        className={`fixed top-0
        right-0
        h-full
        w-1/2 bg-secondary
        z-50 p-8
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={close} className="text-white mb-10">
          <X />
        </button>
        <nav
          className="flex flex-col
            gap-8 text-white text-lg"
        >
          {menus.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
