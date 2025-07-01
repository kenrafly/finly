import { NextResponse } from "next/server";
import { addGoal } from "@/lib/actions/goal.actions";

export async function GET() {
  return NextResponse.json(
    { message: "GET request received for goals" },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const goal = await addGoal(data);
    return NextResponse.json(goal, { status: 201 });
  } catch (error) {
    console.error("Error adding goal:", error);
    return NextResponse.json({ error: "Failed to add goal" }, { status: 500 });
  }
}
