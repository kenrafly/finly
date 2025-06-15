import React from "react";
import PieChartWithNeedle from "./SavingsChart";

const Savings = () => {
  return (
    <div className="min-h-screen ">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="col-span-1 md:col-span-4">
          <h1 className="text-2xl text-[#FFE3A9] ">Hi, Rafly! Welcome Back</h1>
          <p className="text-white">
            Manage your money and review your transactions
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 flex items-center  justify-end gap-2">
          <button className="bg-[#3772FF] text-[#FFE3A9] p-3 rounded-2xl text-xs">
            Add Transactions
          </button>
          <button className="bg-[#3772FF] text-[#FFE3A9] p-3 rounded-2xl text-xs">
            Add Balance
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-8 h-full gap-10 py-4">
        <div className="col-span-5 md:col-span-5 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-8">
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <div>
            {" "}
            <PieChartWithNeedle />
          </div>
        </div>
        <div className="col-span-5 md:col-span-5 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-8">
          <h2 className="text-[#0B1D51] text-lg mb-2">BUDGET</h2>
        </div>
      </div>
    </div>
  );
};

export default Savings;
