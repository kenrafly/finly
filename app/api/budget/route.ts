import { NextResponse } from "next/server";
import { addBudget } from "@/lib/actions/budget.action";

export async function GET() {
  return NextResponse.json(
    { message: "GET request received for budget" },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const budget = await addBudget(data);
    return NextResponse.json(budget, { status: 201 });
  } catch (error) {
    console.error("Error adding budget:", error);
    return NextResponse.json(
      { error: "Failed to add budget" },
      { status: 500 }
    );
  }
}
