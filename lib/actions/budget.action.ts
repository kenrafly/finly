"use server";

import BudgetRecord from "../model/budget.model";
import { connectToDatabase } from "../mongoose";

interface Budget {
  userId: string;
  currentAmount: number;
  category: string;
  limit: number;
}

export const addBudget = async (budget: Budget) => {
  await connectToDatabase();

  const newBudget = new BudgetRecord(budget);
  return newBudget.save();
};
