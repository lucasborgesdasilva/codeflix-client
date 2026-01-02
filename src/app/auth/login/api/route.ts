import { loginFormSchema } from "@/app/lib/validations/login-validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    console.log("Login attempt:", { email, password });

    return new NextResponse("Its working");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Login error:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 400 });
  }
}