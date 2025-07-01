"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

const BudgetPage = ({
  show,
}: {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useUser();
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState<number | string>("");
  const [currentAmount, setCurrentAmount] = useState<number | string>("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setMessage("❌ You must be logged in.");
      return;
    }

    try {
      const res = await fetch("/api/budget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          category,
          limit: typeof limit === "number" ? limit : parseFloat(limit),
          currentAmount:
            typeof currentAmount === "number"
              ? currentAmount
              : parseFloat(currentAmount),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit budget");

      setCategory("");
      setLimit("");
      setCurrentAmount("");
      setMessage("✅ Budget submitted successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to submit budget");
    }
  };

  return (
    <div className="fixed inset-0 z-40 backdrop-blur-xs flex items-center justify-center">
      <div className="bg-[#0B1D51] p-8 shadow-lg text-center h-full rounded-2xl w-1/3">
        <h1 className="text-2xl text-[#FFE3A9] mb-4">BUDGET</h1>
        <button className="absolute top-4 right-4" onClick={() => show(false)}>
          Close
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col text-left gap-4">
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-2 text-black"
              placeholder="Enter category"
            />
          </div>
          <div>
            <label>Limit:</label>
            <input
              type="number"
              name="limit"
              required
              value={limit}
              onChange={(e) =>
                setLimit(e.target.value ? parseFloat(e.target.value) : "")
              }
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-2 text-black"
              placeholder="Enter limit"
            />
          </div>
          <div>
            <label>Current Amount:</label>
            <input
              type="number"
              name="currentAmount"
              required
              value={currentAmount}
              onChange={(e) =>
                setCurrentAmount(
                  e.target.value ? parseFloat(e.target.value) : ""
                )
              }
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-2 text-black"
              placeholder="Current amount"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FFE3A9] text-[#0B1D51] p-2 rounded-md w-full hover:bg-[#3772FF] hover:text-white transition-colors duration-300"
          >
            Submit
          </button>
          {message && <p className="mt-2 text-sm">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default BudgetPage;
