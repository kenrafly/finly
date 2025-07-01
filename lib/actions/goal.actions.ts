import { NextResponse } from "next/server";
import GoalRecord from "../model/goal.model";
import { connectToDatabase } from "../mongoose";

interface Goal {
  userId: string;
  title: string;
  targetAmount: number;
  currentAmount?: number;
  dueDate: Date;
}

export const addGoal = async (goal: Goal) => {
  await connectToDatabase();

  const newGoal = new GoalRecord(goal);
  return newGoal.save();
};
