import mongoose from "mongoose";
import connectionStr from "../database/db";
import Todos from "../database/model/model";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionStr);
  const data = await Todos.find();
  return NextResponse.json({
    result: data,
    success: true,
  });
};

export const POST = async (req: Request, res: Response) => {
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  const todo = new Todos(payload);
  const result = await todo.save();
  return NextResponse.json({ result, success: true });
};