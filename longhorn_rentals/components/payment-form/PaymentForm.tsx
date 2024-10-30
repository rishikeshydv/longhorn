"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Separator } from "@/components/ui/separator"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
interface PaymentFormProps {
    setPaymentCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    clientSecret: string;
    total: number;
    shipping: number;
    discount: number;
    trailerType: string;
    daysOfRental: string;
  }
export default function PaymentForm({setPaymentCompleted,clientSecret,total,shipping,discount,trailerType,daysOfRental}: PaymentFormProps) {
    const trailerKV = {
        "2024-enclosed":"2024 7x16 Enclosed Trailer",
        "2023-enclosed":"2023 6x12 Enclosed Trailer",
        "2021-pj":"2021 PJ 102x20 Trailer",
        "utility":"Utility Trailer",
        "livestock":"Livestock Trailer",
        "dump":"Dump Trailer",
        "superwide":"Superwide Trailer"
    }
        //payment state variables
        const stripe = useStripe();
        const elements = useElements();
        const [isLoading, setIsLoading] = React.useState(false);
    
        useEffect(() => {
          if (!stripe || !clientSecret) {
            return;
          }
          if (!clientSecret) {
            return;
          }
    
        },[stripe, clientSecret]);

        const onSubmit = async () => {
            //setShowCart(false);
            setPaymentCompleted(true);
        
            if (!stripe) {
              // Stripe.js hasn't yet loaded.
              // Make sure to disable form submission until Stripe.js has loaded.
              return;
            }
        
            if (!elements) {
              // Stripe.js has loaded. Enable form submission.
              return;
            }
            setIsLoading(true);
        
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
              return;
            }
            
            const {error} = await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
                card: cardElement,
              },
            });
        
            if (error) {
              console.log("[error]", error);
              setIsLoading(false);
              return;
            }
        
            setIsLoading(false);
        
           //await PushOrder(newOrder);
            //handling the email
            // const response = await fetch("/api/email", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(newOrder),
            // });
            // console.log(response.json());
          };
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 md:px-8">
    <Card>
      <CardHeader>
        <CardTitle className='text-[35px]'>Payment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-[20px] mb-20">
         <div className="text-2xl grid grid-cols-2">
            <p className="font-semibold">Type Of Trailer:&nbsp;</p>    
            <p>{trailerKV[trailerType as keyof typeof trailerKV]}</p>
        </div>   
        <div className="text-2xl grid grid-cols-2">
            <p className="font-semibold">Days of Rental:</p>    
            <p>{daysOfRental} Days</p>
        </div>   
        </div>

        <CardElement
                    id="payment-element"
                    className={`bg-gray-100 p-6 rounded-2xl`}   
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                fontFamily:"tungsten",
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                  />
      </CardContent>
    </Card>
    <div className="grid gap-12">
      <Card>
        <CardHeader>
          <CardTitle className='text-[35px]'>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span className='text-[24px]'>Subtotal</span>
            <span  className='text-[20px]'>${total}.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span  className='text-[24px]'>Shipping</span>
            <span  className='text-[20px]'>${shipping}.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span  className='text-[24px]'>Discount</span>
            <span className="text-green-500 text-[20px]">-${discount}.00</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between font-medium">
            <span  className='text-[30px] font-bold'>Total</span>
            <span className='text-[24px]'>${total+shipping-discount}.00</span>
          </div>
        </CardContent>
      </Card>
      {/* <Button size="lg" className="w-full text-[24px]">
        Pay
      </Button> */}
      <Button size="lg" variant={"default"} onClick={onSubmit} className="w-full text-[24px]" disabled={isLoading || !stripe || !elements}>
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pay"}
              </Button>
    </div>
  </div>
  )
}
