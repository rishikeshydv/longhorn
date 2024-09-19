"use client";

import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Hero1 from "@/public/heros/hero1.png";
import Specialty from "@/components/specialty/Specialty";
import Review from "@/components/review/Review";
import { CiLocationOn } from "react-icons/ci";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "@/components/carousal/EmblaCarousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { useRouter } from "next/navigation";
import Individual from "@/components/specialty/Individual";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  const router = useRouter();
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const [start, setStart] = React.useState<string>("MM/DD/YYYY");
  const [end, setEnd] = React.useState<string>("MM/DD/YYYY");

  return (
    <main className="">
      <section className="bg-home-section bg-no-repeat bg-cover bg-center min-h-[100vh]">
        <NavBar />
        <div className="mt-[120px] flex flex-col justify-center items-center">
          <div className="text-[65px] tracking-wide px-[219px] text-center">
            <span
              className={` text-white`}
              style={{ fontFamily: "tungsten-semibold" }}
            >
              THE PERFECT RENTAL FOR
            </span>
            &nbsp;
            <span className={`text-[#FFD100]`}>YOUR PERFECT MOMENT</span>
          </div>
          {/* Box */}
          <div className="px-[160px] mt-12">
            <div
              className="flex justify-center space-x-4 bg-[#FFFFFF] border-1 border-white rounded-[20px] px-[50px] py-[40px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }}
            >
              <div className="space-y-2">
                <Label className="text-black text-[22px]">
                  Rental Location
                </Label>
                {/* <Input
                  placeholder="Find our location"
                  className="text-[19px] w-[320px] h-[44px] px-[10px] py-[15px] text-gray-800"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                /> */}
                <Select>
                  <SelectTrigger
                    className="text-[19px] w-[320px] h-[44px] px-[10px] py-[15px] text-[#808080]"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                  >
                    <SelectValue placeholder="Find Our Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stephensville" className="text-[18px]">
                      Stephensville, TX
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-black text-[22px]">Rental Date</Label>
                {/* <Input
                  placeholder="DD/MM/YYYY"
                  className="text-[19px] w-[320px] h-[44px] px-[10px] py-[15px] text-gray-800"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                /> */}
                <div
                  className="flex justify-between items-center text-[19px] w-[320px] h-[44px] px-[10px] text-[#808080] rounded-md border border-input"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                >
                  <p>
                    {start}&nbsp;-&nbsp;{end}
                  </p>
                  <div>
                    <Popover>
                      <PopoverTrigger className="py-[10px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M17.1667 5.33333H16.5V4.66667C16.5 4.29867 16.202 4 15.8333 4C15.4647 4 15.1667 4.29867 15.1667 4.66667V5.33333H9.83333V4.66667C9.83333 4.29867 9.53533 4 9.16667 4C8.798 4 8.5 4.29867 8.5 4.66667V5.33333H7.83333C5.99533 5.33333 4.5 6.82867 4.5 8.66667V16.6667C4.5 18.5047 5.99533 20 7.83333 20H17.1667C19.0047 20 20.5 18.5047 20.5 16.6667V8.66667C20.5 6.82867 19.0047 5.33333 17.1667 5.33333ZM7.83333 6.66667H17.1667C18.2693 6.66667 19.1667 7.564 19.1667 8.66667V9.33333H5.83333V8.66667C5.83333 7.564 6.73067 6.66667 7.83333 6.66667ZM17.1667 18.6667H7.83333C6.73067 18.6667 5.83333 17.7693 5.83333 16.6667V10.6667H19.1667V16.6667C19.1667 17.7693 18.2693 18.6667 17.1667 18.6667ZM17.1667 13.3333C17.1667 13.7013 16.8687 14 16.5 14H8.5C8.13133 14 7.83333 13.7013 7.83333 13.3333C7.83333 12.9653 8.13133 12.6667 8.5 12.6667H16.5C16.8687 12.6667 17.1667 12.9653 17.1667 13.3333ZM12.5 16C12.5 16.368 12.202 16.6667 11.8333 16.6667H8.5C8.13133 16.6667 7.83333 16.368 7.83333 16C7.83333 15.632 8.13133 15.3333 8.5 15.3333H11.8333C12.202 15.3333 12.5 15.632 12.5 16Z"
                            fill="black"
                          />
                        </svg>
                      </PopoverTrigger>
                      <PopoverContent className="w-full">
                      <Calendar
                  mode="range"
                  selected={date}
                  numberOfMonths={2}
                  className="rounded-md text-[24px] bg-white shadow-lg"
                  onSelect={(range: DateRange | undefined) => {
                    if (range && range.from && range.to) {
                      setDate(range);
                      setStart(range.from.toLocaleDateString());
                      setEnd(range.to.toLocaleDateString());
                    }
                  }}
                />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
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
                <Button className="bg-[#FFD100] text-black text-[17px] py-[22px] w-[131px] hover:bg-yellow-500">
                  Get A Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFD100] w-full h-[84px] space-x-2 flex justify-center items-center">
        <span className="text-[22px] text-black py-2">
          WE&apos;RE HERE TO HELP YOU CHOOSE THE RIGHT TRAILER FOR THE RIGHT JOB.
        </span>
        &nbsp;&nbsp;&nbsp;
        <Button className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] p-6 hover:bg-yellow-500">
          CONTACT US NOW
        </Button>
      </section>
      <section className="bg-watermark min-h-[100vh] w-full ">
        <div className="grid grid-cols-2 py-[145px] pl-[150px] pr-[140px]">
          <div>
            <Image src={Hero1} alt="Hero Image" className="w-[500px] h-auto" />
          </div>
          <div>
            <p className="text-[25px] text-black">ABOUT US</p>
            <div className="text-[70px] tracking-wide">
              <span style={{ fontFamily: "tungsten-semibold" }}>
                CREATED FOR
              </span>
              &nbsp;
              <span className="text-[#FFD100]">THE RELENTLESS</span>
            </div>
            <p className="text-[24px] pb-[40px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              omnis quia earum nam optio consequuntur facere! Atque temporibus
              qui iure provident excepturi natus, quos quisquam nostrum amet ut
              accusamus odit.
            </p>
            <div className="flex space-x-[30px] pb-[40px]">
              <div className="border p-[20px] rounded-[10px] w-[157px] h-auto">
                <p
                  className={`text-[#FFD100] text-[50px] text-center`}
                  style={{ fontFamily: "tungsten" }}
                >
                  250+
                </p>
                <p className="text-black text-[20px] text-center">
                  Projects Completed
                </p>
              </div>
              <div className="border p-[20px] rounded-[10px] w-[157px] h-auto">
                <p
                  className={`text-[#FFD100] text-[50px] text-center`}
                  style={{ fontFamily: "tungsten" }}
                >
                  35+
                </p>
                <p className="text-black text-[20px] text-center">
                  Awards Gained
                </p>
              </div>
              <div className="border p-[20px] rounded-[10px] w-[157px] h-auto">
                <p
                  className={`text-[#FFD100] text-[50px] text-center`}
                  style={{ fontFamily: "tungsten" }}
                >
                  80+
                </p>
                <p className="text-black text-[20px] text-center">
                  Satisfied Customers
                </p>
              </div>
            </div>
            <Button className="bg-[#ffd100] hover:bg-yellow-500 text-black text-[18px] w-[125px]" onClick={()=>router.push("/products")}>
              RENT A TRAILER
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#000000]">
        <div className="pt-[100px] pb-[100px]">
          <div className="text-[70px] tracking-wide text-center">
            <span
              className={`text-white`}
              style={{ fontFamily: "tungsten-semibold" }}
            >
              OUR SPECIALTY
            </span>
            &nbsp;
            <span className="text-[#FFD100]">RESOURCES</span>
          </div>

          {/* <Specialty /> */}
          <div className="flex justify-between px-[140px] pt-[60px]">
            <Button className="bg-[#FFD100] hover:bg-yellow-600 text-black text-[18px] w-[98px]" onClick={()=>router.push("/products")}>
              View All
            </Button>
            <div className="flex space-x-4">
              <div className="w-[15px] h-[15px] bg-gray-700 rounded-full" />
              <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full" />
              <div className="w-[15px] h-[15px] bg-gray-700 rounded-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh]">
        <div className="py-[150px]">
          <div className="text-[70px] tracking-wide text-center">
            <span
              className={` text-black`}
              style={{ fontFamily: "tungsten-semibold" }}
            >
              HAPPY CUSTOMER
            </span>
            &nbsp;
            <span className="text-[#FFD100]">SAYING</span>
          </div>
          <div className="grid grid-cols-3 gap-8 p-20">
            <Review
              img="/reviews/review2.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              name="Genene Bell"
              profession="Trailer Rental Customer"
            />
            <Review
              img="/reviews/review1.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              name="Genene Bell"
              profession="Trailer Rental Customer"
            />
            <Review
              img="/reviews/review3.png"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              name="Genene Bell"
              profession="Trailer Rental Customer"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-[15px] h-[15px] bg-gray-700 rounded-full" />
            <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full" />
            <div className="w-[15px] h-[15px] bg-gray-700 rounded-full" />
          </div>
        </div>
      </section>
      <section className="bg-[#FFD100] w-full min-h-[250px] flex justify-center items-center">
        <div className="flex space-x-[80px] px-[40px] py-[60px]">
          <div className="flex justify-center items-center">
            <img src="/heros/hero2.png" alt="" className="w-[300px] h-auto" />
          </div>
          <div className="flex flex-col">
            <div className="text-[60px] tracking-wide text-center">
              <span
                className={` text-black`}
                style={{ fontFamily: "tungsten-semibold" }}
              >
                RENT
              </span>
              &nbsp;
              <span>A TRAILER</span>
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] px-[30px] py-[25px] w-[200px] hover:bg-yellow-500" onClick={()=>router.push("/products")}>
                <CiLocationOn className="mb-[2px]" />
                &nbsp;&nbsp;VIEW TRAILERS
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/heros/hero3.png" alt="" className="w-[320px] h-auto" />
          </div>
        </div>
      </section>
      <section className="bg-black min-h-[70vh]">
        <div className="py-[120px]">
          <div className="text-[70px] tracking-wide text-center">
            <span
              className={` text-white`}
              style={{ fontFamily: "tungsten-semibold" }}
            >
              TRAILER RENTALS
            </span>
            &nbsp;
            <span className="text-[#FFD100]">GALLERY</span>
          </div>
          <main className="flex flex-col items-center ">
            <div className="flex gap-10 overflow-x-auto px-4 pt-[103px] pb-[70px]">
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 1"
                className="rounded-lg"
                width="300"
                height="400"
                style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 2"
                className="rounded-lg py-4"
                width="300"
                height="300"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 1"
                className="rounded-lg"
                width="300"
                height="400"
                style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 2"
                className="rounded-lg py-4"
                width="300"
                height="300"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
            <div className="flex gap-2 mt-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="w-2 h-2 bg-gray-500 rounded-full" />
              <span className="w-2 h-2 bg-gray-500 rounded-full" />
            </div>
          </main>
        </div>
      </section>
    </main>
  );
}
