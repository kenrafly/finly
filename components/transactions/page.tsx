"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

interface Transaction {
  _id?: string;
  title: string;
  type: "income" | "expense";
  amount: number;
  date: string;
}

interface Props {
  show: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValues?: Transaction | null;
  onSuccess?: () => void;
}

const TransactionForm: React.FC<Props> = ({
  show,
  defaultValues,
  onSuccess,
}) => {
  const { user } = useUser();

  const [title, setTitle] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [amount, setAmount] = useState<number | string>("");
  const [date, setDate] = useState("");
  const [editData, setEditData] = useState<Transaction | null>(null);

  // Update local state if new defaultValues are passed in
  useEffect(() => {
    setEditData(defaultValues ?? null);
  }, [defaultValues]);

  // Populate fields from local editData
  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setType(editData.type);
      setAmount(editData.amount);
      setDate(editData.date.slice(0, 10));
    }
  }, [editData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user.id) return;

    const payload = {
      userId: user.id,
      title,
      type,
      amount: typeof amount === "number" ? amount : parseFloat(amount),
      date,
    };

    const method = defaultValues?._id ? "PUT" : "POST";
    const url = defaultValues?._id
      ? `/api/transactions/${defaultValues._id}`
      : "/api/transactions";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setTitle("");
      setType("expense");
      setAmount("");
      setDate("");
      show(false);
      onSuccess?.();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-40 backdrop-blur-xs flex items-center justify-center">
      <div className="bg-[#0B1D51] p-8 shadow-lg text-center h-full rounded-2xl w-2/3 md:w-1/3">
        <h1 className="text-xl md:text-2xl text-[#FFE3A9] mb-6">
          {defaultValues ? "EDIT TRANSACTION" : "NEW TRANSACTION"}
        </h1>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => show(false)}
        >
          Close
        </button>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start">
            <label>Title:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white bg-transparent"
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col items-start">
            <label>Type:</label>
            <select
              required
              value={type}
              onChange={(e) => setType(e.target.value as "income" | "expense")}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white bg-transparent"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label>Amount:</label>
            <input
              type="number"
              required
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value ? parseFloat(e.target.value) : "")
              }
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white bg-transparent"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex flex-col items-start">
            <label>Date:</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FFE3A9] text-[#0B1D51] p-2 rounded-md w-full hover:bg-[#3772FF] hover:text-white transition-colors duration-300"
          >
            {defaultValues ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
