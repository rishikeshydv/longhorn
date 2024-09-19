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

export default function Home() {
  return (
    <main className="">
      <section className="bg-home-section min-h-[100vh]">
        <NavBar />
        <div className="mt-[120px] flex flex-col justify-center items-center">
          <div className="text-[65px] tracking-wide px-[219px] text-center">
            <span className={` text-white`} style={{fontFamily:"tungsten-semibold"}}>
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
      <section className="bg-[#FFD100] w-full h-[84px] flex justify-center items-center">
        <span className="text-[22px] text-black py-2">
          WE&apos;RE HERE TO HELP THOSE AFFECTED BY HURRICANE DEBBY. OUR
          EMERGENCY RESPONSE TEAM IS STANDING BY
        </span>
        &nbsp;&nbsp;&nbsp;
        <Button className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] p-6">
          24/7 TO HELP YOU RECOVER
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
              <span style={{fontFamily:"tungsten-semibold"}}>
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
                  style={{fontFamily:"tungsten"}}
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
                                    style={{fontFamily:"tungsten"}}
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
                  style={{fontFamily:"tungsten"}}
                >
                  80+
                </p>
                <p className="text-black text-[20px] text-center">
                  Satisfied Customers
                </p>
              </div>
            </div>
            <Button className="bg-[#ffd100] text-black text-[18px] w-[125px]">
              RENT A TRAILER
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#000000]">
        <div className="pt-[100px] pb-[100px]">
          <div className="text-[70px] tracking-wide text-center">
            <span className={`text-white`} style={{fontFamily:"tungsten-semibold"}}>
              OUR SPECIALTY
            </span>
            &nbsp;
            <span className="text-[#FFD100]">RESOURCES</span>
          </div>
          <Specialty />
          <div className="flex justify-between px-[140px] pt-[60px]">
            <Button className="bg-[#FFD100] text-black text-[18px] w-[98px]">
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
            <span className={` text-black`} style={{fontFamily:"tungsten-semibold"}}>
              HAPPY CUSTOMER
            </span>
            &nbsp;
            <span className="text-[#FFD100]">SAYING</span>
          </div>
          <div className="grid grid-cols-3 gap-16 p-20">
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
            <div className="text-[70px] tracking-wide text-center">
              <span className={` text-black`} style={{fontFamily:"tungsten-semibold"}}>
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
      <section className="bg-black min-h-[70vh]">
        <div className="py-[120px]">
        <div className="text-[70px] tracking-wide text-center">
            <span className={` text-white`} style={{fontFamily:"tungsten-semibold"}}>
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
