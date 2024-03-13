import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { title } = await req.json();

  await db.todo.create({
    data: { title, complete: false },
  });

  return NextResponse.json({ message: "Created Todo" }, { status: 200 });
}
