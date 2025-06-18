import subscribeNewsletter from "@/actions/subscribe-newletter";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log(email)
    const response = await subscribeNewsletter(email);

    if (response) {
      return NextResponse.json(
        {
          message: "Subscription successful!",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Subscription failed." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error: "An error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
