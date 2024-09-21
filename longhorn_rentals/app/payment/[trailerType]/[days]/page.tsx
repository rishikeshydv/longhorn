"use client"
import React, {useEffect, useState} from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import NavBar from '@/components/navbar/NavBar'
import { useParams } from 'next/navigation'
import { MdBookmarkAdd } from "react-icons/md";

export default function Payment() {
    const { trailerType,days } = useParams();
    const shipping = 0;
    const discount = 0;
    const [total, setTotal] = React.useState(0);
    //for hitch5
    const [buttonText5, setButtonText5] = React.useState("Add to Cart");
    const [textColor5, setTextColor5] = React.useState("text-black");
    const [buttonColor5, setButtonColor5] = React.useState("bg-white");
    //for hitch7
    const [buttonText7, setButtonText7] = React.useState("Add to Cart");
    const [textColor7, setTextColor7] = React.useState("text-black");
    const [buttonColor7, setButtonColor7] = React.useState("bg-white");
    //addons
    const [hitch5, setHitch5] = React.useState(0);
    const [hitch7, setHitch7] = React.useState(0);
    const addons = [
      {
        title: "Add 5' Drop Hitch",
        src:"/hitch/5hitch.png",
        description1: "Maximum GVWR 10,000 lbs",
        description2: "Minimum tongue weight 1,000 lbs",
        description3: "2' 5/16 ball and a 2' ball",
      },
      {
        title: "Add 7' Drop Hitch",
        src:"/hitch/7hitch.png",
        description1: "Maximum GVWR 10,000 lbs",
        description2: "Minimum tongue weight 1,000 lbs",
        description3: "2' 5/16 ball and a 2' ball",
      }
    ]

    //user information
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");

    //handling emails
  const OrderDeliveryEmail = async (orderNumber: string, email: string) => {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        product: trailerType.toString().toUpperCase(),
        days: days,
        date: new Date().toLocaleDateString(),
        total: total,
      }),
    });
    console.log(response.json());
  };


  


  //handling stripe payment
    const [clientSecret, setClientSecret] = useState<string>("");
  useEffect(() => {
    // Fetch the client secret from your backend
    const fetchClientSecret = async () => {
      if (total === 0){
        return;
      }
      let newAmount = 0;
      newAmount = total * 100;
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: newAmount}), // Adjust as needed
      });

      const data = await response.json();
      setClientSecret(data.clientSecret);
    };
    //actual code
    // if (total > 0){
    //   fetchClientSecret();
    // }

    //dummy code
    if (total > 9999999999){
      fetchClientSecret();
    }
}, [total]);

useEffect(() => {
    //calculating total
    if(trailerType == "2024-enclosed"){
      if (Number(days) == 3){
        setTotal(270);
      }
      else if (Number(days) == 7){
        setTotal(550);
      }
      else {
        setTotal(100 * Number(days));
      }
    }
    else if (trailerType == "2023-enclosed"){
      if (Number(days) == 3){
        setTotal(150);
      }
      else if (Number(days) == 7){
        setTotal(280);
      }
      else {
        setTotal(60 * Number(days));
      }
    }
    else if (trailerType == "2021-pj"){
      if (Number(days) == 3){
        setTotal(270);
      }
      else if (Number(days) == 7){
        setTotal(550);
      }
      else {
        setTotal(100 * Number(days));
      }
    }
    else if (trailerType == "dump"){
      if (Number(days) == 3){
        setTotal(390);
      }
      else if (Number(days) == 7){
        setTotal(800);
      }
      else {
        setTotal(145 * Number(days));
      }
    }
    else if (trailerType == "livestock"){
      if (Number(days) == 3){
        setTotal(240);
      }
      else if (Number(days) == 7){
        setTotal(490);
      }
      else {
        setTotal(90 * Number(days));
      }
    }
    else if (trailerType == "utility"){
      if (Number(days) == 3){
        setTotal(130);
      }
      else if (Number(days) == 7){
        setTotal(290);
      }
      else {
        setTotal(50 * Number(days));
      }
    }
    else{
      if (Number(days) == 3){
        setTotal(270);
      }
      else if (Number(days) == 7){
        setTotal(550);
      }
      else {
        setTotal(100 * Number(days));
      }
    }
  }, [trailerType, days]);

  //useless code for build purpose
  console.log(email,address,OrderDeliveryEmail,clientSecret);
  return (
   <main>
    <div className='bg-black'>
    <NavBar />
    </div>

    <div className='grid md:grid-rows-2 md:gap-8 max-w-4xl md:pt-20 pb-10 mx-auto'>

    <Card className='border-none shadow-none'>
          <CardHeader>
            <CardTitle className='text-[35px]'>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className='text-[24px]'>Name</Label>
              <Input id="name" placeholder="Enter your name" className='text-[20px]' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className='text-[24px]'>Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className='text-[20px]' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address" className='text-[24px]'>Address</Label>
              <Input id="address" placeholder="Enter your address" className='text-[20px]' onChange={(e)=>setAddress(e.target.value)}/>
            </div>
          </CardContent>
    </Card>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle className='text-[35px]'>Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="card-number" className='text-[24px]'>Card Number</Label>
            <Input id="card-number" placeholder="0000 0000 0000 0000" className='text-[20px]' />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-2">
              <Label htmlFor="expiration" className='text-[24px]'>Expiration</Label>
              <div className="grid grid-cols-2 gap-2 text-[20px]">
                <Select>
                    <SelectTrigger id="expiration-month" className='text-[20px]'>
                        <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()} className='text-[16px]'>
                                {i + 1}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="expiration-year" className='text-[20px]'>
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={2023 + i} value={(2023 + i).toString()} className='text-[16px]'>
                        {2023 + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvv" className='text-[24px]'>CVV</Label>
              <Input id="cvv" placeholder="123" className='text-[24px]'/>
            </div>
          </div>
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
        <Button size="lg" className="w-full text-[24px]">
          Pay
        </Button>
      </div>
    </div>

    </div>
    <section className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-bold mb-8">Explore Our Addons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className="bg-card p-6 rounded-lg shadow-sm border-[1px] border-gray-200 transition-all hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-muted rounded-md p-2 mr-4">
                <MdBookmarkAdd />
                </div>
                <h3 className="text-[24px] font-semibold">{addons[0].title}</h3>
              </div>
              <div className='overflow-hidden mb-4'>
              <img src={addons[0].src} alt="" className='rounded-3xl' style={{ aspectRatio: "350/350", objectFit: "cover" }}/>
              </div>
              <p className="text-muted-foreground text-[16px]">{addons[0].description1}</p>
              <p className="text-muted-foreground text-[16px]">{addons[0].description2}</p>
              <p className="text-muted-foreground text-[16px] mb-6">{addons[0].description3}</p>
              <Button variant="outline" size="sm" className={`w-full text-[20px] ${buttonColor5} ${textColor5}`} 
              onClick={() => {
                if (hitch5==10) {
                  alert("Item Removed from Cart");
                  setHitch5(0);
                  setTotal(prevTotal => prevTotal - 10);
                  setButtonColor5("bg-white");
                  setButtonText5("Add to Cart");
                  setTextColor5("text-black");
                } 
                else if (hitch5==0){
                  alert("Item Added to Cart");
                  setHitch5(10);
                  setTotal(prevTotal => prevTotal + 10); 
                  setButtonColor5("bg-green-400");
                  setButtonText5("Remove from Cart");
                  setTextColor5("text-black");
                }
              }}
              >
                {buttonText5}
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border-[1px] border-gray-200 transition-all hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-muted rounded-md p-2 mr-4">
                <MdBookmarkAdd />
                </div>
                <h3 className="text-[24px] font-semibold">{addons[1].title}</h3>
              </div>
              <div className='overflow-hidden mb-4'>
              <img src={addons[1].src} alt="" className='rounded-3xl' style={{ aspectRatio: "350/350", objectFit: "cover" }}/>
              </div>
              <p className="text-muted-foreground text-[16px]">{addons[1].description1}</p>
              <p className="text-muted-foreground text-[16px]">{addons[1].description2}</p>
              <p className="text-muted-foreground text-[16px] mb-6">{addons[1].description3}</p>
              <Button variant="outline" size="sm" className={`w-full text-[20px] ${buttonColor7} ${textColor7}`}
                             onClick={() => {
                              if (hitch7 == 10) {
                                alert("Item Removed from Cart");
                                setHitch7(0);
                                setTotal(prevTotal => prevTotal - 10);
                                setButtonColor7("bg-white");
                                setButtonText7("Add to Cart");
                                setTextColor7("text-black");
                              } else if (hitch7 == 0) {
                                alert("Item Added to Cart");
                                setHitch7(10);
                                setTotal(prevTotal => prevTotal + 10);
                                setButtonColor7("bg-green-400");
                                setButtonText7("Remove from Cart");
                                setTextColor7("text-black");
                              }
                            }}
               >
                {buttonText7}
              </Button>
            </div>
 
        </div>
      </div>
    </section>
    <Separator />
   </main>
  )
}
