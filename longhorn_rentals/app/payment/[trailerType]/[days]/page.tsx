"use client"
import React from 'react'
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
    //addons
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
    //calculating total
    if(trailerType == "2024-enclosed"){
      if (Number(days) == 3){
        var total = 270;
      }
      else if (Number(days) == 7){
        var total = 550;
      }
      else {
        var total = 100 * Number(days);
      }
    }
    else if (trailerType == "2023-enclosed"){
      if (Number(days) == 3){
        var total = 150;
      }
      else if (Number(days) == 7){
        var total = 280;
      }
      else {
        var total = 60 * Number(days);
      }
    }
    else if (trailerType == "2021-pj"){
      if (Number(days) == 3){
        var total = 270;
      }
      else if (Number(days) == 7){
        var total = 550;
      }
      else {
        var total = 100 * Number(days);
      }
    }
    else if (trailerType == "dump"){
      if (Number(days) == 3){
        var total = 390;
      }
      else if (Number(days) == 7){
        var total = 800;
      }
      else {
        var total = 145 * Number(days);
      }
    }
    else if (trailerType == "livestock"){
      if (Number(days) == 3){
        var total = 240;
      }
      else if (Number(days) == 7){
        var total = 490;
      }
      else {
        var total = 90 * Number(days);
      }
    }
    else if (trailerType == "utility"){
      if (Number(days) == 3){
        var total = 130;
      }
      else if (Number(days) == 7){
        var total = 290;
      }
      else {
        var total = 50 * Number(days);
      }
    }
    else{
      if (Number(days) == 3){
        var total = 270;
      }
      else if (Number(days) == 7){
        var total = 550;
      }
      else {
        var total = 100 * Number(days);
      }
    }
  return (
   <main>
    <div className='bg-black'>
    <NavBar />
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4 md:p-8">
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
      <div className="grid gap-4">
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
    <section className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-bold mb-8">Explore Our Addons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-muted rounded-md p-2 mr-4">
                <MdBookmarkAdd />
                </div>
                <h3 className="text-[24px] font-semibold">{addon.title}</h3>
              </div>
              <div className='overflow-hidden mb-4'>
              <img src={addon.src} alt="" className='rounded-3xl' style={{ aspectRatio: "350/350", objectFit: "cover" }}/>
              </div>
              <p className="text-muted-foreground text-[16px]">{addon.description1}</p>
              <p className="text-muted-foreground text-[16px]">{addon.description2}</p>
              <p className="text-muted-foreground text-[16px] mb-6">{addon.description3}</p>
              <Button variant="outline" size="sm" className="w-full text-[20px]">
                Add
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Separator />
   </main>
  )
}
