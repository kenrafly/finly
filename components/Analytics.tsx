import React from "react";
import BarChartCmp from "./BarChartCmp";
import RecentTransactions from "./RecentTransaction";

const Analytics = () => {
  return (
    <div className="">
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
      <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-6 gap-6 pt-8">
        <div className="col-span-1 md:col-span-2 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-1">
          <h2 className="text-[#0B1D51] text-lg mb-2">INCOME</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
        </div>
        <div className="col-span-1 md:col-span-2 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-1">
          <h2 className="text-[#0B1D51] text-lg mb-2">EXPENSE</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
        </div>
        <div className="col-span-2 md:col-span-1 md:row-span-3 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg overflow-y-scroll max-h-96 scrollbar-hide">
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
          <hr />
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
          <hr />
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
          <hr />
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
          <hr />
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
          <hr />
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
          <hr />
        </div>
        <div className="col-span-2 md:col-span-4 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-3">
          <h2 className="text-[#0B1D51] text-lg mb-2">
            TOTAL CASH IN CASH OUT{" "}
          </h2>
          <BarChartCmp />
        </div>
        <div className="col-span-2 md:col-span-5 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-2">
          <h2 className="text-[#0B1D51] text-lg mb-2">RECENT TRANSACTIONS</h2>
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
