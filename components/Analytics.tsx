/* eslint-disable */
"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import BarChartCmp from "./BarChartCmp";
import RecentTransactions from "./RecentTransaction";
import TransactionForm from "./transactions/page";

interface Transaction {
  _id: string;
  title: string;
  type: "income" | "expense";
  amount: number;
  date: string;
}

const Analytics = () => {
  const { user } = useUser();
  const [showTransactions, setShowTransactions] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  const fetchTransactions = async () => {
    if (!user?.id) return;

    const now = new Date();
    const startOfMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    ).toISOString();
    const endOfMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      1
    ).toISOString();

    try {
      const res = await fetch(
        `/api/transactions?userId=${user.id}&start=${startOfMonth}&end=${endOfMonth}`
      );
      const data = await res.json();

      if (res.ok) {
        setTransactions(data);

        const income = data
          .filter((tx: Transaction) => tx.type === "income")
          .reduce((sum, tx) => sum + tx.amount, 0);
        const expense = data
          .filter((tx: Transaction) => tx.type === "expense")
          .reduce((sum, tx) => sum + tx.amount, 0);

        setIncomeTotal(income);
        setExpenseTotal(expense);
      } else {
        console.error("Fetch failed:", data.error);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setShowTransactions(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setTransactions((prev) => prev.filter((tx) => tx._id !== id));
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="col-span-1 md:col-span-4">
          <h1 className="text-2xl text-[#FFE3A9]">Hi, Rafly! Welcome Back</h1>
          <p className="text-white">
            Manage your money and review your transactions
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 flex items-center justify-end gap-2">
          <button
            className="bg-[#3772FF] text-[#FFE3A9] p-3 rounded-2xl text-xs"
            onClick={() => {
              setEditingTransaction(null); // reset form
              setShowTransactions(true);
            }}
          >
            Add Transactions
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-6 gap-6 pt-8">
        <div className="col-span-1 md:col-span-2 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-1">
          <h2 className="text-[#0B1D51] text-lg mb-2">INCOME</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">
            ${incomeTotal.toLocaleString()}
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-1">
          <h2 className="text-[#0B1D51] text-lg mb-2">EXPENSE</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">
            ${expenseTotal.toLocaleString()}
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 md:row-span-3 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg overflow-y-scroll max-h-96 scrollbar-hide">
          <h2 className="text-[#0B1D51] text-lg mb-2">SAVINGS</h2>
          <p className="text-[#0B1D51] font-bold text-2xl">$5,000</p>
        </div>

        <div className="col-span-2 md:col-span-4 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-3">
          <h2 className="text-[#0B1D51] text-lg mb-2">
            TOTAL CASH IN CASH OUT
          </h2>
          <BarChartCmp />
        </div>

        <div className="col-span-2 md:col-span-5 bg-[#FFE3A9] p-4 rounded-2xl shadow-lg row-span-2">
          <h2 className="text-[#0B1D51] text-lg mb-2">RECENT TRANSACTIONS</h2>
          <RecentTransactions
            transactions={transactions}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {showTransactions && (
        <TransactionForm
          show={setShowTransactions}
          editData={editingTransaction}
          onSuccess={() => {
            fetchTransactions();
            setShowTransactions(false);
          }}
        />
      )}
    </div>
  );
};

export default Analytics;
