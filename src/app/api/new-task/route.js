import { Task } from "@/models/task";
import { connectDB } from "@/utils/features";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

     const body = await req.json();

    const { title, description } = body;

    const task = await Task.create({
      title,
      description,
      user: "507f1f77bcf86cd799439011",
    });

    return NextResponse.json({
      success: true,
      message: "Task Added Successfully",
      task,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
};
