"use client";
import RotatingText from "./RotatingText";

import Image from "next/image";

import ContactGlassCard from "./ContentGlassCard";
import HeroFeatures from "./HeroFeatures";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="bg-blend-overlay-primary-900 relative min-h-screen overflow-hidden bg-[url(/img/hero-bg.png)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-20 md:grid-cols-2 md:items-center md:pt-32">
        {/* تصویر */}

        <div className="relative order-2 flex justify-center">
          <div className="relative h-90 w-90 lg:h-125 lg:w-125">
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

        <div className="text-white">
          <p className="mb-6 text-sm tracking-[5px] text-white/70">اعتماد با یک لبخند سالم آغاز می‌شود</p>

          <h1 className="font-serif text-5xl leading-tight lg:text-7xl">
            زیبایی لبخند شما،
            <br />
            تخصص ماست
          </h1>

          <p className="mt-8 max-w-xl leading-8 text-white/70">
            ارائه خدمات تخصصی دندانپزشکی زیبایی با تمرکز بر لبخند طبیعی، سلامت و اعتماد به نفس شما.
          </p>

          <HeroFeatures />

          <div className="mt-10 flex gap-10 items-center justify-start">
            <PrimaryButton text="رزرو نوبت" />
            <SecondaryButton text="تماس با ما" className="ml-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
