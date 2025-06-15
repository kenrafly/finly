"use client";
import React from "react";
import Lottie from "lottie-react";
import HeroAnimation from "@/public/hero.json";
import Link from "next/link";
import Swiggle from "@/public/swiggle.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:h-screen flex flex-col md:flex-row bg-[#0B1D51] md:px-17 p-7 text-[#FFE3A9]">
      <Image
        src={Swiggle}
        alt="Swiggle"
        className="hidden md:flex absolute left-0 md:w-1/6 z-10"
      />
      <Image
        src={Swiggle}
        alt="Swiggle"
        className="hidden md:flex absolute right-0 md:w-1/6 z-10"
      />
      <div className="flex flex-col justify h-full justify-center items-start  md:w-1/2 z-20">
        <h1 className="text-7xl  font-extrabold mb-4 ">
          Take Control of Your <span className="text-[#35FF69]">Finances </span>
          with <span className="text-[#3772FF]">FinFly</span>
        </h1>
        <p className="md:text-lg text-sm mb-8 text-white">
          FinFly is your ultimate finance tracker, designed to help you manage
          your expenses and savings effortlessly. With intuitive tools and
          real-time insights, achieving your financial goals has never been
          easier.
        </p>
        <Link
          href="/signup"
          className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition rounded-3xl"
        >
          Join Now
        </Link>
      </div>
      <div className="w-1/2 items-center justify-center hidden md:flex z-20">
        <Lottie animationData={HeroAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
