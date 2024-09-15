import React from 'react'
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { tungsten, tungstenSemiBold } from '../layout';
import Filters from '@/components/filter/Filters';
import Individual from '@/components/specialty/Individual';
import { CiLocationOn } from "react-icons/ci";
export default function Products() {
  return (
    <main>
      <section className="bg-product-page min-h-[95vh]">
        <NavBar />
        <div className="mt-[120px]">
          <div className="text-[75px] tracking-wide px-[219px] text-center">
            <span className={`text-[#FFD100]`}>TRAILERS</span>&nbsp;
            <span className={`${tungstenSemiBold.className} text-white`}>
              &gt; RENTAL LISTINGS
            </span>
          </div>
          {/* Box */}
          <div className="px-[160px] mt-12">
            <div
              className="flex space-x-4 bg-[#FFFFFF] border-1 border-white rounded-[20px] px-[50px] py-[40px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }}
            >
              <div className="space-y-2">
                <Label className="text-black text-[22px]">
                  Rental Location
                </Label>
                <Input
                  placeholder="Find our location"
                  className="text-[19px] w-[320px] h-[44px] px-[10px] py-[15px] text-gray-800"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-black text-[22px]">Start Date</Label>
                <Input
                  placeholder="DD/MM/YYYY"
                  className="text-[19px] w-[320px] h-[44px] px-[10px] py-[15px] text-gray-800"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                />
              </div>
              <div className="mt-[25px]" >
                <RadioGroup
                  defaultValue="option1"
                  aria-labelledby="radio-group-label"
                  className="rounded-lg p-4 text"
                >
                  <div className="flex items-center space-x-8">
                    <Label
                      htmlFor="option1"
                      className="flex items-center justify-center space-x-2 w-[100px] text-[17px] cursor-pointer rounded-md border p-2 text-black"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                    >
                      <RadioGroupItem
                        id="option1"
                        value="option1"
                        className="bg-[#FFD100 text-yellow-200 border-white"
                      />
                      <span>Delivery</span>
                    </Label>
                    <Label
                      htmlFor="option2"
                      className="flex items-center justify-center w-[100px] space-x-2 text-[17px] cursor-pointer rounded-md border p-2 text-black"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                    >
                      <RadioGroupItem
                        id="option2"
                        value="option2"
                        className="bg-[#FFD100 text-yellow-200 border-white"
                      />
                      <span>Pickup</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-10">
                <Button className="bg-[#FFD100] text-black text-[17px] py-[22px] w-[131px]">
                  Get A Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black min-h-[100vh]'>
        <div>
        <div>
            <Filters />
        </div>
        <div className='grid grid-cols-2'>
            <Individual />
            <Individual />
            <Individual />
            <Individual />
            <Individual />
            <Individual />
        </div>
        </div>
      </section>
      <section className="bg-[#FFD100] w-full h-[250px] flex justify-center items-center">
        <div className="flex space-x-[80px] px-[40px] py-[60px]">
          <div className="flex justify-center items-center">
            <img src="/heros/hero2.png" alt="" className="w-[300px] h-auto" />
          </div>
          <div className="flex flex-col">
            <div className="text-[70px] tracking-wide text-center">
              <span className={`${tungstenSemiBold.className} text-black`}>
                PROFESSIONAL
              </span>
              &nbsp;
              <span>GRADE TRAILER</span>
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] px-[30px] py-[25px] w-[200px]">
                <CiLocationOn className="mb-[2px]" />
                &nbsp;&nbsp;FIND A DEALER
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/heros/hero3.png" alt="" className="w-[320px] h-auto" />
          </div>
        </div>
      </section>
    </main>
  )
}
