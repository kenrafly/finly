import TransactionRecord from "@/lib/model/transactions.model";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectToDatabase(); // connect to MongoDB

  const searchParams = new URL(request.url).searchParams;
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setMonth(start.getMonth() + 1);

  // Get all transactions for this month and user
  const transactions = await TransactionRecord.find({
    userId,
    date: { $gte: start, $lt: end },
  });

  // Initialize array with 31 days
  const dailyData = Array.from({ length: 31 }, (_, i) => ({
    day: `${i + 1}`,
    income: 0,
    expense: 0,
  }));

  transactions.forEach((tx) => {
    const day = new Date(tx.date).getDate(); // 1-31
    const entry = dailyData[day - 1];
    if (tx.type === "income") {
      entry.income += tx.amount;
    } else if (tx.type === "expense") {
      entry.expense += tx.amount;
    }
  });

  return NextResponse.json(dailyData);
}
