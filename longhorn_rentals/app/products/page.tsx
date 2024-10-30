"use client";
import React from "react";
import NavBar from "@/components/navbar/NavBar";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import Trailer from "@/components/trailer/Trailer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Products() {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [start, setStart] = React.useState<string>("MM/DD/YYYY");
  const [end, setEnd] = React.useState<string>("MM/DD/YYYY");
  const router = useRouter();
  const [trailerType, setTrailerType] = React.useState<string>("");
  const [selectedWidth, setSelectedWidth] = React.useState<string>("all");
  const [selectedGVMR, setSelectedGVMR] = React.useState<string>("all");
  const [selectedTrailerType, setSelectedTrailerType] = React.useState<string>("all");
  const [selectedAxles, setSelectedAxles] = React.useState<string>("all");


  const trailerPaths = {
    "2024-enclosed": "/details/2024-enclosed",
    "2023-enclosed": "/details/2023-enclosed",
    "2021-pj": "/details/2021-pj",
    utility: "/details/utility",
    livestock: "/details/livestock",
    dump: "/details/dump",
    superwide: "/details/superwide",
  };

  // list for filters
  const allTrailers = [
    { id: 1, width: 83, gvmr: 7000, type: "2024-enclosed", axles: 3500 },
    { id: 2, width: 83, gvmr: 3500, type: "2023-enclosed", axles: 3500 },
    { id: 3, width: 102, gvmr: 9899, type: "2021-pj", axles: 5200 },
    { id: 4, width: 60, gvmr: 2995, type: "utility", axles: 3500 },
    { id: 5, width: 60, gvmr: 7000, type: "livestock", axles: 3500 },
    { id: 6, width: 83, gvmr: 7000, type: "dump", axles: 3500 },
    { id: 7, width: 102, gvmr: 9899, type: "superwide", axles: 5200 },
  ];

    //logic for pagination
    const totalTrailers = allTrailers.length;
    const trailersPerPage = 4;
    const totalPages = Math.ceil(totalTrailers / trailersPerPage);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

  const onSubmit = () => {
    if (!trailerType) {
      alert("Please select a trailer type");
      return;
    }
    router.push(trailerPaths[trailerType as keyof typeof trailerPaths]);
  };
  const handlePageChange = (direction: "next" | "prev") => {
    setCurrentPage((prev) => {
      if (direction === "next" && prev < totalPages) return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      alert(`End of ${direction === "next" ? "Next" : "Previous"} Pages`);
      return prev;
    });
  };
  

    // Filter trailers based on selected filters
    const filteredTrailers = allTrailers.filter((trailer) => {
      const widthMatch = selectedWidth === "all" || trailer.width === parseInt(selectedWidth);
      const gvmrMatch = selectedGVMR === "all" || trailer.gvmr <= parseInt(selectedGVMR);
      const typeMatch = selectedTrailerType === "all" || trailer.type.includes(selectedTrailerType);
      const axlesMatch = selectedAxles === "all" || trailer.axles === parseInt(selectedAxles);
  
      return widthMatch && gvmrMatch && typeMatch && axlesMatch;
    });

    //useless code for build
    console.log(currentPage)
  return (
    <main className="overflow-x-hidden">
      <section className="bg-product-page bg-no-repeat bg-cover bg-center md:min-h-[95vh]">
        <NavBar />
        <div className="mt-[120px] flex flex-col justify-center items-center">
          <div className="text-[35px] md:text-[75px] tracking-wide px-[55px] md:px-[219px] text-center">
            <span className={`text-[#FFD100]`}>TRAILERS</span>&nbsp;
            <span
              className={` text-white`}
              style={{ fontFamily: "tungsten-semibold" }}
            >
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
                  <Select onValueChange={(value) => setTrailerType(value)}>
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
                <Button
                  className="bg-[#FFD100] text-black text-[17px] py-[22px] w-[131px] hover:bg-yellow-500"
                  onClick={onSubmit}
                >
                  Get A Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black md:min-h-[100vh]">
        <div className="flex flex-col md:flex-row space-y-[60px] md:space-y-0 md:space-x-[60px] pt-[80px] px-[60px] md:pt-[150px] md:px-[80px]">
          <div className="md:flex-[0.2]">
            {/* filters start */}
            <div className="text-white">
              <div className="flex justify-between items-center border-b-[1px] border-gray-500">
                <div className="text-[24px] flex space-x-[10px]">
                  <img src="/svgs/sliders.svg" alt="" />
                  <span className="mt-[1px]">FILTER</span>
                </div>
                <div className="underline text-[20px]">CLEAR ALL</div>
              </div>
              <div className="text-[22px]">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
              <AccordionTrigger>WIDTH</AccordionTrigger>
              <AccordionContent>
                <RadioGroup value={selectedWidth} onValueChange={setSelectedWidth}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="option-all" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="option-all" className="text-[20px]">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="60" id="option-one" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="option-one" className="text-[20px]">60&quot; Wide</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="83" id="option-two" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="option-two" className="text-[20px]">83&quot; Wide</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="102" id="option-three" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="option-three" className="text-[20px]">102&quot; Wide</Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
            
            {/* GVMR Filter Section */}
            <AccordionItem value="item-2">
              <AccordionTrigger>GVMR</AccordionTrigger>
              <AccordionContent>
                <RadioGroup value={selectedGVMR} onValueChange={setSelectedGVMR}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="gvmr-option-all" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="gvmr-option-all" className="text-[20px]">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3000" id="gvmr-option-3000" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="gvmr-option-3000" className="text-[20px]">Below 3,000 GVMR</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6000" id="gvmr-option-6000" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="gvmr-option-6000" className="text-[20px]">Below 6,000 GVMR</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10000" id="gvmr-option-10000" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="gvmr-option-10000" className="text-[20px]">Below 10,000 GVMR</Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>

            {/* Trailer Type Filter Section */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="uppercase">Trailer Type</AccordionTrigger>
              <AccordionContent>
                <RadioGroup value={selectedTrailerType} onValueChange={setSelectedTrailerType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="trailer-option-all" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="trailer-option-all" className="text-[20px]">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enclosed" id="trailer-option-enclosed" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="trailer-option-enclosed" className="text-[20px]">Enclosed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="car-hauler" id="trailer-option-car-hauler" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="trailer-option-car-hauler" className="text-[20px]">Car Hauler</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="utility" id="trailer-option-utility" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="trailer-option-utility" className="text-[20px]">Utility</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="livestock" id="trailer-option-livestock" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="trailer-option-livestock" className="text-[20px]">Livestock</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dump" id="trailer-option-dump" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="trailer-option-dump" className="text-[20px]">Dump</Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>

            {/* Axles Filter Section */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="uppercase">Axles</AccordionTrigger>
              <AccordionContent>
                <RadioGroup value={selectedAxles} onValueChange={setSelectedAxles}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="axles-option-all" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="axles-option-all" className="text-[20px]">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3500" id="axles-option-3500" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="axles-option-3500" className="text-[20px]">3,500 lbs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5200" id="axles-option-5200" className="text-[#ffd100] bg-gray-400" />
                    <Label htmlFor="axles-option-5200" className="text-[20px]">5,200 lbs</Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* filters end */}
          </div>
          <div className="flex flex-col md:flex-[0.8] pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[20px]">
              {filteredTrailers.map((trailer) => (
                <Trailer key={trailer.id} trailer={trailer.id} />
              ))}
            </div>

            {/* Pagination part */}
            <div className="flex items-center justify-center w-full p-4 bg-black text-white md:pt-[60px] text-[24px]">
              <div className="flex flex-col md:flex-row items-center md:space-y-0 space-y-2 space-x-1 md:space-x-4">
                <span>Showing all results:</span>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-[24px] bg-black"
                  onClick={() => handlePageChange("prev")}
                >
                                   <ArrowLeftIcon className="w-[18px] h-[18px] text-[#FFD100]" />
                  <span className="text-white">Prev</span>
                </Button>
                <div className="flex items-center space-x-1 md:space-x-4">
                    <Button
                      variant="outline"
                      className={`bg-black text-[24px] ${ "text-[#ffd100]"}`}
                    >
                      1
                    </Button>
                </div>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-[24px] bg-black"
                  onClick={() => handlePageChange("next")}
                >
                                  <span className="text-white">Next</span>
                  <ArrowRightIcon className="w-[18px] h-[18px] text-[#FFD100]" />
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
              <span
                className={` text-black`}
                style={{ fontFamily: "tungsten-semibold" }}
              >
                LOOKING TO RENT
              </span>
              &nbsp;
              <span>A TRAILER</span>
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] px-[30px] py-[25px] w-[200px] hover:bg-yellow-500"
                onClick={() => router.push("/products")}
              >
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
