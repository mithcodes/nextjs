import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectionStr from "../../lib/db";
import Meetup from "@/app/lib/model/model";

export async function GET(req: Request, res: Response) {
  try {
    await mongoose.connect(connectionStr);
    const data = await Meetup.find();
    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: Request, res: Response) {
  await mongoose.connect(connectionStr);
  const payload = await req.json();
  let meetup = new Meetup(payload);
  let result = await meetup.save();
  return NextResponse.json({ result, success: true });
}
