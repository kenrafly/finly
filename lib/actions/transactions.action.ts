"use server";

import TransactionRecord from "../model/transactions.model";
import { connectToDatabase } from "../mongoose";

interface Transaction {
  userId: string;
  amount: number;
  type: "expense" | "income";
  date?: Date;
}

export const getTransactions = async (userId: string) => {
  await connectToDatabase();

  const transactions = await TransactionRecord.find({ userId }).sort({
    date: -1,
  });
  return transactions;
};

export const addTransaction = async (transaction: Transaction) => {
  await connectToDatabase();

  const newTransaction = new TransactionRecord(transaction);
  return newTransaction.save();
};
