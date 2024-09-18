
import React from "react";
import NavBar from "@/components/navbar/NavBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Specialty from "@/components/specialty/Specialty";
//import {DateRangePicker} from "@nextui-org/date-picker";
//import { Calendar } from "@/components/ui/calendar"
import { tungstenSemiBold } from "@/styles/fonts";

export default function Details() {
   // const [open, setOpen] = React.useState(true);
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
              <div className="mt-[25px]">
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
      <section className="min-h-[100vh] bg-white">
        <div>
            <div>
                <Label className="text-[22px] text-black">Booking Calendar</Label>
            {/* <DateRangePicker 
                className="text-gray-600 fill-gray-200 border-1"
                isOpen={true}
                size="lg"
                visibleMonths={2}
                isRequired
                color="primary"
                
                //the calendar UI should have white background
                
                /> */}
                  {/* <Calendar
            mode="single"
            // selected={date}
            // onSelect={setDate}
            // className="rounded-md border"
          /> */}
                    </div>
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#000000]">
        <div className="pt-[100px] pb-[100px]">
          <div className="text-[70px] tracking-wide text-center">
            <span className={`${tungstenSemiBold.className} text-white`}>
              TRAILER RENTALS
            </span>
            &nbsp;
            <span className="text-[#FFD100]">GALLERY</span>
          </div>
          <Specialty />
          <div className="flex justify-center px-[140px] pt-[60px]">
            <div className="flex space-x-4">
              <div className="w-[15px] h-[15px] bg-gray-700 rounded-full" />
              <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full" />
              <div className="w-[15px] h-[15px] bg-gray-700 rounded-full" />
            </div>
          </div>
          

        </div>
      </section>
    </main>
  );
}
