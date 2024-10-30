import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_LIVE_SECRET_KEY!
,
    {
        apiVersion: "2024-06-20",
        typescript: true, 
    }
);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const amount = data.amount;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {enabled: true},
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
  } catch (error:unknown) {
        // Safely check for the error shape and access properties
        if (typeof error === "object" && error !== null && "response" in error) {
          const errResponse = (error as { response: { data: unknown; status: number } }).response;
          return NextResponse.json(errResponse.data, { status: errResponse.status });
        } else if (error instanceof Stripe.errors.StripeError) {
          // Handle Stripe-specific errors
          return NextResponse.json({ error: error.message }, { status: error.statusCode || 500 });
        } else {
          // Fallback for unknown errors
          return NextResponse.json({ message: "An unknown error occurred" }, { status: 500 });
        }
      }
  } 
