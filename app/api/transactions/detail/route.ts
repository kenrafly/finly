import TransactionRecord from "@/lib/model/transactions.model";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(req: Request) {
  await connectToDatabase(); // Ensure database connection
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const transactions = await TransactionRecord.find({ userId }).sort({
    date: -1,
  });

  return NextResponse.json(transactions);
}
