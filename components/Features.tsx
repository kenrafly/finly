"use client";
import React from "react";
import Lottie from "lottie-react";
import dashboard from "@/public/dashboard.json";
import meditating from "@/public/meditating.json";
import transaction from "@/public/transaction.json";

const Features = () => {
  return (
    <section className="md:min-h-screen flex flex-col bg-[#0B1D51] md:px-17 p-7 items-center   text-white">
      <div>
        <h1 className="text-center text-2xl md:text-6xl text-[#FFE3A9] mb-8">
          Track Your Expenses Effortlessly with Our Intuitive Finance Tools
        </h1>
      </div>
      <div className="md:flex max-sm:flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-60 h-60">
            <Lottie animationData={meditating} loop={true} />
          </div>
          <h2 className="text-2xl text-[#FFE3A9]">
            Create Budgets That Work for You and Your Lifestyle
          </h2>
          <p>
            Stay on top of your finances with our comprehensive expense tracking
            features.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-60 h-60">
            <Lottie animationData={transaction} loop={true} />
          </div>
          <h2 className="text-2xl text-[#FFE3A9]">
            Generate Detailed Financial Reports to Understand Your Spending
            Habits
          </h2>
          <p>
            Analyze your financial health with easy-to-read reports and
            insights.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-60 h-60 ">
            <Lottie animationData={dashboard} loop={true} />
          </div>
          <h2 className="text-2xl text-[#FFE3A9]">
            Access Your Financial Data Anytime, Anywhere
          </h2>
          <p>
            Analyze your financial health with easy-to-read reports and
            insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
