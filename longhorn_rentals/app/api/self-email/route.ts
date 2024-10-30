import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import dotenv from "dotenv";
import SelfEmailTemplate from '@/resend/SelfEmailTemplate';
dotenv.config();
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);
export async function POST(req:NextRequest) {

    //send email to the admin
    try {
            //send email to the admin
            const orderReceived = await req.json();
            const { data, error } = await resend.emails.send({
              from: "Longhorn Trailers <help@longhorntrailerrentals.com>",
              to: "help@longhorntrailerrentals.com",
              subject: "📦 New Order Received!",
              react: SelfEmailTemplate({ order:orderReceived})
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
          }
          catch (error) {
            console.error(error);
          }
  };