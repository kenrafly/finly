import { NextResponse } from "next/server";
import {
  addTransaction,
  getTransactions,
} from "@/lib/actions/transactions.action";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const transactions = await getTransactions(userId);
  return NextResponse.json(transactions, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const transaction = await addTransaction(data);
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    console.error("Error adding transaction:", error);
    return NextResponse.json(
      { error: "Failed to add transaction" },
      { status: 500 }
    );
  }
}
