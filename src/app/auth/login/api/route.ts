/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginFormSchema } from "@/app/lib/validations/login-validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    console.log('Email:', email, 'Password:', password);

    return new NextResponse("Its working");

  } catch (error: any) {
    console.error("Login error:", error);
    return new NextResponse(error.message, { status: 400 });
  }
}