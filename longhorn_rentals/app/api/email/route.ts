import EmailTemplate from '@/resend/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);
export async function POST(req:NextRequest) {
  //here we will check if any of the order is of tyoe Mods
    try {
        const orderReceived = await req.json();
      const { data, error } = await resend.emails.send({
          from: "info@fsclipz.com",
          to: orderReceived.email,
          subject: "🎉Thank you for your purchase!",
          react: EmailTemplate({ order:orderReceived})
      });
      if (error){
        return NextResponse.json(
            { message: "Email sending failed", error },
            { status: 400 }
          );
      }
      return NextResponse.json(
        { message: "Email sent successfully", data },
        { status: 200 }
      );
  
    } catch (error) {
      console.error(error);
    }
  };