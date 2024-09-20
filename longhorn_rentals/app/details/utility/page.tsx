"use client";
import React from "react";
import NavBar from "@/components/navbar/NavBar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
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
import MyCarousal from "@/components/carousal/MyCarousal";
import MyCarousalMobile from "@/components/carousal/MyCarousal_Mobile";
import TrailerImgCarousal from "@/components/carousal/TrailerImgCarousal";
import TrailerImgCarousalMobile from "@/components/carousal/TrailerImgCarousalMobile";

export default function Details() {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [start, setStart] = React.useState<string>("MM/DD/YYYY");
  const [end, setEnd] = React.useState<string>("MM/DD/YYYY");
  const [trailerType, setTrailerType] = React.useState<string>("");

    //list of images
    const urlList = [
      "/trailers/utility/utility-1.png",
      "/trailers/utility/utility-2.png",
      "/trailers/utility/utility-3.png",
      "/trailers/utility/utility-4.png",
      "/trailers/utility/utility-5.png",
      "/trailers/utility/utility-6.png",
      "/trailers/utility/utility-7.png",
    ];

  const price = 50.00;
  const [total, setTotal] = React.useState<number>(0);
  console.log(trailerType);
  React.useEffect(() => {
    if (!date.from || !date.to) {
      return;
    }
    const diff = Math.abs(date.to.getTime() - date.from.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))+1;
    //3 days and 7 days discount
    if (days == 3){
      setTotal(130);
    }
    else if (days == 7){
      setTotal(290);
    }
    else {
      setTotal(price * days);
    }
  },
  [date]);
  return (
    <main className="overflow-x-hidden">
      <section className="bg-product-page bg-no-repeat bg-cover bg-center min-h-[95vh]">
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
                        2021 PJ 20&apos; x 102&quot; SUPERWIDE B5
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
              <Button className="bg-[#FFD100] text-black text-[17px] py-[22px] w-[131px] hover:bg-yellow-500">
                  Get A Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] bg-white">
        <div className="py-[80px] px-[30px] md:px-[60px] flex flex-col gap-[60px]">
        <div className="md:hidden flex flex-col justify-start items-start">
                <p className="text-[30px] text-black">6&apos;x8&apos; Big Tex 30SA Utility Trailer</p>
                <p className="flex gap-2 text-[#808080]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
<path d="M9.00013 21.6668L8.40819 21.1357C7.59215 20.4204 0.466797 13.9785 0.466797 9.26642C0.466797 4.33291 4.28731 0.333496 9.00013 0.333496C13.7129 0.333496 17.5335 4.33291 17.5335 9.26642C17.5335 13.9785 10.4081 20.4204 9.59545 21.1392L9.00013 21.6668ZM9.00013 2.26506C5.30811 2.26943 2.31617 5.40147 2.31199 9.26638C2.31199 12.2266 6.69578 16.9555 9.00013 19.1199C11.3045 16.9547 15.6883 12.223 15.6883 9.26638C15.6841 5.40147 12.6922 2.26947 9.00013 2.26506Z" fill="#FFD100"/>
<path d="M8.99973 12.8075C7.1316 12.8075 5.61719 11.2221 5.61719 9.26652C5.61719 7.31092 7.1316 5.72559 8.99973 5.72559C10.8679 5.72559 12.3823 7.31092 12.3823 9.26652C12.3823 11.2221 10.8679 12.8075 8.99973 12.8075ZM8.99973 7.49601C8.06567 7.49601 7.30846 8.28868 7.30846 9.26648C7.30846 10.2443 8.06567 11.0369 8.99973 11.0369C9.93379 11.0369 10.691 10.2443 10.691 9.26648C10.691 8.28868 9.93383 7.49601 8.99973 7.49601Z" fill="#FFD100"/>
</svg>Stephensville, TX - Reliable Utility Trailer</p>
              </div>
          <div className="flex flex-col md:flex-row justify-center md:space-x-[30px]">
            <div className="flex flex-col bg-white overflow-hidden">
              <div className="relative w-full max-w-4xl object-cover">
                <img
                  src={urlList[0]}
                  alt="Main trailer"
                  className="w-full object-cover rounded-3xl"
                  width="1000"
                  height="700"
                />
              </div>
              <div className="md:flex hidden">
              <TrailerImgCarousal urlList={urlList}/>
              </div>
              <div className="md:hidden">
              <TrailerImgCarousalMobile urlList={urlList}/>
              </div>
              <div className="hidden md:flex md:flex-col justify-start items-start pt-[60px]">
                <p className="text-[40px] text-black">6&apos;x8&apos; Big Tex 30SA Utility Trailer</p>
                <p className="flex gap-2 text-[#808080]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
<path d="M9.00013 21.6668L8.40819 21.1357C7.59215 20.4204 0.466797 13.9785 0.466797 9.26642C0.466797 4.33291 4.28731 0.333496 9.00013 0.333496C13.7129 0.333496 17.5335 4.33291 17.5335 9.26642C17.5335 13.9785 10.4081 20.4204 9.59545 21.1392L9.00013 21.6668ZM9.00013 2.26506C5.30811 2.26943 2.31617 5.40147 2.31199 9.26638C2.31199 12.2266 6.69578 16.9555 9.00013 19.1199C11.3045 16.9547 15.6883 12.223 15.6883 9.26638C15.6841 5.40147 12.6922 2.26947 9.00013 2.26506Z" fill="#FFD100"/>
<path d="M8.99973 12.8075C7.1316 12.8075 5.61719 11.2221 5.61719 9.26652C5.61719 7.31092 7.1316 5.72559 8.99973 5.72559C10.8679 5.72559 12.3823 7.31092 12.3823 9.26652C12.3823 11.2221 10.8679 12.8075 8.99973 12.8075ZM8.99973 7.49601C8.06567 7.49601 7.30846 8.28868 7.30846 9.26648C7.30846 10.2443 8.06567 11.0369 8.99973 11.0369C9.93379 11.0369 10.691 10.2443 10.691 9.26648C10.691 8.28868 9.93383 7.49601 8.99973 7.49601Z" fill="#FFD100"/>
</svg>Stephensville, TX - Reliable Utility Trailer</p>
              </div>
            </div>
            <div className="pt-6 md:pt-0 bg-[#F5F5F5] flex flex-col gap-[26px]" style={{ borderRadius: "0px 0px 16px 16px" }}>
              <div className="bg-black" style={{ borderRadius: "16px 16px 0px 0px" }}>
                <p className="text-[#ffd100] text-center text-[30px] md:text-[60px]">
                  $50.00
                </p>
                <p className="text-white text-[24px] text-center">PER DAY</p>
              </div>
              <div className="px-[30px]">
                <Label className="text-[22px] text-black ">
                  Booking Calendar
                </Label>
                <Button
                  disabled
                  className="bg-white flex justify-between text-[#808080] text-[16px] tracking-wide px-[15px] py-[10px] h-[60px] w-full"
                >
                  {start}&nbsp;-&nbsp;{end}
                  <LuCalendarRange className="text-black w-[20px] h-[20px]" />
                </Button>
              </div>
              <div className="bg-[#f5f5f5] px-[30px]">
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
              </div>
              <div className="px-[30px]">
                <Label className="text-[22px] text-black ">Where</Label>
                <Button
                  disabled
                  className="bg-white flex justify-between text-[#808080] text-[16px] tracking-wide px-[15px] py-[10px] h-[60px] w-full"
                >
                  Stephensville, TX
                  <GrLocation className="text-black w-[20px] h-[20px]" />
                </Button>
              </div>
              <div className="px-[30px] flex justify-between pb-[27px]">
                <p className="flex text-[24px text-[#008545]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M23.542 7.547C21.5269 5.54597 18.8477 4.44434 15.9997 4.44434C13.1517 4.44434 10.4724 5.54693 8.45737 7.547C6.44234 9.54708 5.33301 12.2068 5.33301 15.0369C5.33301 17.8671 6.44234 20.5258 8.48452 22.5529L12.308 26.0609C13.2991 27.0249 14.6111 27.5554 15.9997 27.5554C17.3883 27.5554 18.6993 27.0249 19.6709 26.0792L23.542 22.5269C25.557 20.5258 26.6663 17.8661 26.6663 15.0369C26.6663 12.2077 25.557 9.54708 23.542 7.547ZM21.526 12.8337L15.9085 18.3293C15.5332 18.702 15.0397 18.8878 14.5442 18.8878C14.0486 18.8878 13.5502 18.7 13.1711 18.3245L10.4734 15.7283C10.0894 15.3576 10.0797 14.748 10.453 14.3667C10.8263 13.9834 11.4402 13.9757 11.8242 14.3455L14.5325 16.9523L20.1655 11.4624C20.5485 11.0897 21.1614 11.0946 21.5366 11.473C21.9129 11.8514 21.909 12.461 21.5269 12.8346L21.526 12.8337Z"
                      fill="#008545"
                    />
                  </svg>{" "}
                  Dates are available
                </p>
                <div className="flex space-x-[30px]">
                  <p className="md:text-[26px]">Total: ${total}.00</p>
                  <Button className="text-[18px] px-[30px] bg-[#ffd100] text-black hover:bg-yellow-500">
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border border-gray-200 rounded-xl">
      <div className="space-y-4 text-[24px] ">
        <h2 className="text-[40px] font-bold">Description</h2>
        <p className="font-semibold">
        6&apos;x8&apos; Big Tex 30SA Utility Trailer
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-[20px] text-[#808080]">
          <ul className="space-y-2">
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              GVWR 2,995 lbs
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
             Trailer empty weight 800Ibs
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Tool box
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Ratchet and straps
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              60&quot; wide
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              8&apos; long
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              4ft Tall Ramp Gate
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Electric Plug 4 Way Pin
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              (4) Tie Down Loops Inside Bed
            </li>
          </ul>
          <ul className="space-y-2 hidden md:flex md:flex-col">
            <li className="hidden md:flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Electric Breakaway Kit w/ Charger
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Stake Pockets
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Treadplate Steel Fenders
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              8&quot; Formed I-Beam Frame & Tongue
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              3&quot; Channel Crossmembers 16&apos; on Center
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              6&apos;6&quot; Rear Slide In Ramps
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Roll-up Tarp Kit (Pull Bar)
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              10 Gauge Floor and Walls
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Ultra-Wide Monster Step Driver Side
            </li>
          </ul>
          <ul className="space-y-2 hidden md:flex md:flex-col">
            <li className="md:flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Interstate Deep Cycle Battery
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              110V Integrated Trickle Charger
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              KTI Hydraulic Pump
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              5&quot; Hydraulic Cylinder w/ Scissor Lift
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Split/Spreader Gate
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Dump Bed Width: 83&quot;
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Deck Height: 28&quot;
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Dump Pitch: 40
            </li>
            <li className="flex items-start">
              <DotIcon className="mr-2 text-yellow-500" />
              Dump Bed Capacity: 10.76 yd
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-[40px] font-bold">Details</h2>
        <ul className="space-y-2 text-[20px] text-[#808080]">
          <li className="flex items-start">
            <DotIcon className="mr-2 text-yellow-500" />
            Trailer Type: Utility Trailer
          </li>
          <li className="flex items-start">
            <DotIcon className="mr-2 text-yellow-500" />
            Make: Big Tex
          </li>
          <li className="flex items-start">
            <DotIcon className="mr-2 text-yellow-500" />
            Model: 30SA Single Axle
          </li>
        </ul>
      </div>
    </div>
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#000000]">
        <div className="pt-[100px] pb-[100px]">
          <div className="text-[35px] md:text-[70px] tracking-wide text-center">
            <span className={` text-white`} style={{fontFamily:"tungsten-semibold"}}>
              TRAILER RENTALS
            </span>
            &nbsp;
            <span className="text-[#FFD100]">GALLERY</span>
          </div>
          <div className="hidden md:flex">
          <MyCarousal />
          </div>

          <div className="md:hidden p-10">
          <MyCarousalMobile />
          </div>
        </div>
      </section>
    </main>
  );
}


function DotIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}