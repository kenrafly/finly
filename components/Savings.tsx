"use client";

import React, { useState } from "react";
import PieChart from "./SavingsChart";
import BudgetChart from "./BudgetChart";
import GoalPage from "./goal/page";
import BudgetPage from "./budget/page";

const Savings = () => {
  const [showSaving, setShowSaving] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
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
          <button
            className="bg-[#3772FF] text-[#FFE3A9] p-3 rounded-2xl text-xs"
            onClick={() => setShowSaving(true)}
          >
            Add Savings
          </button>
          <button
            className="bg-[#3772FF] text-[#FFE3A9] p-3 rounded-2xl text-xs"
            onClick={() => setShowBudget(true)}
          >
            Add Budget
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-8 h-full gap-10 py-4">
        <div className="col-span-5 md:col-span-5 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-8">
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg gap-4 max-h-96 scrollbar-hide overflow-scroll">
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <PieChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <PieChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <PieChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <PieChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-8 h-full gap-10 py-4">
        <div className="col-span-5 md:col-span-5 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-8">
          <h2 className="text-[#0B1D51] text-lg mb-2">BUDGET</h2>
          <div className="w-full grid grid-cols-1  md:grid-cols-2 rounded-2xl shadow-lg gap-4 max-h-96 scrollbar-hide overflow-scroll">
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <BudgetChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <BudgetChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <BudgetChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <BudgetChart />
            </div>
            <div className="col-span-1 bg-[#0B1D51] rounded-2xl flex items-center justify-center flex-col pt-4 text-[#FFE3A9]">
              <h2>TITLE</h2>
              <BudgetChart />
            </div>
          </div>
        </div>
      </div>
      {showSaving && <GoalPage show={setShowSaving} />}
      {showBudget && <BudgetPage show={setShowBudget} />}
    </div>
  );
};

export default Savings;
