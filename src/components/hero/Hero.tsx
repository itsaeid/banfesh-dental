"use client";
import RotatingText from "./RotatingText";

import Image from "next/image";

import ContactGlassCard from "./ContentGlassCard";
import HeroFeatures from "./HeroFeatures";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[url(/img/hero-bg.png)]">
      <div className="mx-auto grid max-w-7xl justify-center px-6 pt-10 md:grid-cols-2 md:items-center md:gap-10 md:pt-32">
        {/* تصویر */}

        <div className="relative flex justify-center md:order-2">
          <div className="relative h-100 w-100 lg:h-125 lg:w-125">
            {/* rotating text */}
            <div className="absolute inset-11.25 rounded-full bg-white p-6">
              <RotatingText />
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image src="/img/dr-banafsheh.png" alt="Dr Banafsheh" fill className="object-cover" priority />
              </div>
            </div>
          </div>
          <div className="bottom-[-8vh] left-0 z-99 mt-30 hidden w-full md:absolute md:block lg:w-105">
            <ContactGlassCard />
          </div>
        </div>

        {/* متن */}

        <div className="text-primary flex flex-col items-center text-center md:order-1 md:items-start md:text-right md:text-white">
          <p className="text-primary/70 mb-6 text-sm font-bold tracking-[5px]">اعتماد با یک لبخند سالم آغاز می‌شود</p>
          <h1 className="font-serif text-5xl leading-tight lg:text-7xl">
            زیبایی لبخند شما
            <br />
            تخصص ماست
          </h1>

          <p className="mt-8 max-w-xl leading-8 md:text-white/70">
            ارائه خدمات تخصصی دندانپزشکی زیبایی با تمرکز بر لبخند طبیعی، سلامت و اعتماد به نفس شما.
          </p>
          <HeroFeatures />
          <div className="mt-10 flex items-center justify-start gap-10">
            <PrimaryButton text="رزرو نوبت" />
            <SecondaryButton text="تماس با ما" className="ml-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
