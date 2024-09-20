"use client"
import React from "react";
import NavBar from "@/components/navbar/NavBar";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Filters from "@/components/filter/Filters";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from "next/navigation";
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
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Trailer from "@/components/trailer/Trailer";
export default function Products() {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [start, setStart] = React.useState<string>("MM/DD/YYYY");
  const [end, setEnd] = React.useState<string>("MM/DD/YYYY");
  const router = useRouter();
  const [trailerType, setTrailerType] = React.useState<string>("");
  const onSubmit = () => {
    if (trailerType === "") {
      alert("Please select a trailer type");
      return;
    }
    if (trailerType === "2024-enclosed") {
      router.push("/details/2024-enclosed");
    }
    else if (trailerType === "2023-enclosed") {
      router.push("/details/2023-enclosed");
    }
    else if (trailerType === "2021-pj") {
      router.push("/details/2021-pj");
    }
    else if (trailerType === "utility") {
      router.push("/details/utility");
    }
    else if (trailerType === "livestock") {
      router.push("/details/livestock");
    }
    else if (trailerType === "dump") {
      router.push("/details/dump");
    }
    else if (trailerType === "superwide") {
      router.push("/details/superwide");
    }
  }
  //logic for pagination
  const totalTrailers = 7;
  const trailersPerPage = 4;
  const totalPages = Math.ceil(totalTrailers / trailersPerPage);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  
  return (
    <main className="overflow-x-hidden">
      <section className="bg-product-page bg-no-repeat bg-cover bg-center md:min-h-[95vh]">
        <NavBar />
        <div className="mt-[120px] flex flex-col justify-center items-center">
          <div className="text-[35px] md:text-[75px] tracking-wide px-[55px] md:px-[219px] text-center">
            <span className={`text-[#FFD100]`}>TRAILERS</span>&nbsp;
            <span className={` text-white`} style={{fontFamily:"tungsten-semibold"}}>
              &gt; RENTAL LISTINGS
            </span>
          </div>
          {/* Box */}
          <div className="px-[80px] md:px-[160px] mt-12 mb-16 md:mb-0">
            <div
              className="flex flex-col md:flex-row justify-center md:space-x-4 bg-[#FFFFFF] border-1 border-white rounded-[20px] p-[25px] md:px-[50px] md:py-[40px] w-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }}
            >
              <div className="flex md:flex-row flex-col md:gap-7">
                <div className="space-y-2 flex flex-col">
                  <Label className="text-black text-[22px]">Trailer Type</Label>
                  <Select onValueChange={(value)=>setTrailerType(value)}>
                    <SelectTrigger
                      className="text-[19px] h-[40px] md:w-[320px] md:h-[44px] px-[10px] py-[15px] text-[#808080]"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                    >
                      <SelectValue placeholder="Choose Trailer Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="2024-enclosed"
                        className="text-[18px] border-b-[1px]"
                      >
                        2024 7x16 Enclosed Trailer
                      </SelectItem>
                      <SelectItem
                        value="2023-enclosed"
                        className="text-[18px] border-b-[1px]"
                      >
                        2023 6x12 Enclosed Trailer
                      </SelectItem>
                      <SelectItem
                        value="2021-pj"
                        className="text-[18px] border-b-[1px]"
                      >
                        2021 PJ 20&apos; x 102&quos; SUPERWIDE B5
                      </SelectItem>
                      <SelectItem
                        value="utility"
                        className="text-[18px] border-b-[1px]"
                      >
                        6&apos;x8&apos; Big Tex 30SA Utility Trailer
                      </SelectItem>
                      <SelectItem
                        value="livestock"
                        className="text-[18px] border-b-[1px]"
                      >
                        2024 BCI Livestock Trailer
                      </SelectItem>
                      <SelectItem
                        value="dump"
                        className="text-[18px] border-b-[1px]"
                      >
                        14&apos;x83&apos;x36&apos; Dump Trailer
                      </SelectItem>
                      <SelectItem
                        value="superwide"
                        className="text-[18px] border-b-[1px]"
                      >
                        2024 PJ 102″x20&apos; BP 5″ Superwide - B5
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex flex-col mt-2 md:mt-0">
                  <Label className="text-black text-[22px]">Rental Date</Label>
                  <div
                    className="flex justify-between items-center text-[19px] w-[260px] h-[40px] md:w-[320px] md:h-[44px] px-[10px] text-[#808080] rounded-md border border-input"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.50)" }}
                  >
                    <p>
                      {start}&nbsp;-&nbsp;{end}
                    </p>
                    <div>
                      <Popover>
                        <PopoverTrigger className="py-1 md:py-[10px]">
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
              </div>
              <div className="mt-[15px] md:mt-[25px]">
                <RadioGroup
                  defaultValue="option1"
                  aria-labelledby="radio-group-label"
                  className="rounded-lg p-4 text"
                >
                  <div className="flex items-center justify-center space-x-7">
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
              <div className="mt-5 md:mt-10 flex justify-center">
              <Button className="bg-[#FFD100] text-black text-[17px] py-[22px] w-[131px] hover:bg-yellow-500" onClick={onSubmit}>
                  Get A Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black md:min-h-[100vh]">
        <div className="flex flex-col md:flex-row space-y-[60px] md:space-y-[0px] md:space-x-[60px] pt-[80px] px-[60px] md:pt-[150px] md:px-[80px]">
          <div className="md:flex-[0.2]">
            <Filters />
          </div>
          <div className="flex flex-col md:flex-[0.8] pb-[120px]">
            
              {
                currentPage === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[20px]">
                    <Trailer trailer={1} />
                    <Trailer trailer={2} />
                    <Trailer trailer={3} />
                    <Trailer trailer={4} />
                  </div>
                ):
                (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[20px]">
                    <Trailer trailer={5} />
                    <Trailer trailer={6} />
                    <Trailer trailer={7} />
                  </div>
                )
              }

            {/* This is the pagination part */}
            <div className="flex items-center justify-center w-full p-4 bg-black text-white md:pt-[60px] text-[24px]">
              <div className="flex flex-col md:flex-row items-center md:space-y-0 space-y-2 space-x-1 md:space-x-4">
                <span>Showing all results:</span>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-[24px] bg-black"
                  onClick={()=>{
                   currentPage > 0 ? setCurrentPage(currentPage-1) : alert("End of Previous Pages")}}
                >
                  <ArrowLeftIcon className="w-[18px] h-[18px] text-[#FFD100]" />
                  <span className="text-white">Prev</span>
                </Button>
                <div className="flex items-center space-x-1 md:space-x-4">
                  {
                    // Pagination buttons
                    [...Array(totalPages)].map((_, index) => (
                      <Button
                        key={index+1}
                        variant="outline"
                        className={`bg-black text-[24px] ${currentPage === index+1 ? "text-[#ffd100]" : "text-white"}`}
                        onClick={()=>setCurrentPage(index+1)}
                      >
                        {index + 1}
                      </Button>
                    ))
                  }

                </div>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-[24px] bg-black"
                >
                  <span className="text-white">Next</span>
                  <ArrowRightIcon className="w-[18px] h-[18px] text-[#FFD100]" 
                  onClick={()=>{currentPage < totalPages ? setCurrentPage(currentPage-1) : alert("End of Next Pages")}}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFD100] w-full min-h-[250px] hidden md:flex justify-center items-center">
        <div className="flex space-x-[80px] px-[40px] py-[60px]">
          <div className="flex justify-center items-center">
            <img src="/heros/hero2.png" alt="" className="w-[300px] h-auto" />
          </div>
          <div className="flex flex-col">
            <div className="text-[60px] tracking-wide text-center">
              <span className={` text-black`} style={{fontFamily:"tungsten-semibold"}}>
                LOOKING TO RENT
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
    </main>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}


function CarIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
<svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="4" height="4" x="2" y="9" />
    <rect width="4" height="10" x="10" y="9" />
    <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
    <circle cx="8" cy="19" r="2" />
    <path d="M10 19h12v-2" />
  </svg>
  )
}


function LocateIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
<svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>

  )
}