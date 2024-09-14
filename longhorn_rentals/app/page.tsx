import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import { tungstenSemiBold } from "./layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Hero1 from "@/public/heros/hero1.png";
export default function Home() {
  return (
<main className="">
  <section className="bg-home-section min-h-[100vh]">
    <NavBar />
    <div className="mt-[120px]">
    <div className="text-[75px] tracking-wide px-[219px]">
      <span className={`${tungstenSemiBold.className}`}>THE PERFECT RENTAL FOR</span>&nbsp;
       <span className={`text-[#FFD100]`}>YOUR PERFECT MOMENT</span>
    </div>
    {/* Box */}
    <div className="px-[160px] mt-12">
    <div className="flex space-x-4 bg-[#FFFFFF] border-1 border-white rounded-[20px] px-[50px] py-[40px]" style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
    <div className="space-y-2">
      <Label className="text-black text-[22px]">Rental Location</Label>
      <Input placeholder="Find our location" className="text-[19px] w-[369px] h-[44px] px-[10px] py-[15px] text-gray-800"/>
    </div>
    <div className="space-y-2">
      <Label className="text-black text-[22px]">Start Date</Label>
      <Input placeholder="DD/MM/YYYY" className="text-[19px] w-[369px] h-[44px] px-[10px] py-[15px] text-gray-800"/>
    </div>
    <div className="mt-[25px]">
    <RadioGroup defaultValue="option1" aria-labelledby="radio-group-label" className="rounded-lg p-4 text">
      <div className="flex items-center space-x-8">
        <Label htmlFor="option1" className="flex items-center space-x-2 text-[17px] cursor-pointer rounded-md border p-2 text-black">
          <RadioGroupItem id="option1" value="option1" className="bg-[#FFD100 text-[#ffd100] border-[#FFD100]"/>
          <span>Delivery</span>
        </Label>
        <Label htmlFor="option2" className="flex items-center space-x-2 text-[17px] cursor-pointer rounded-md border p-2 text-black">
          <RadioGroupItem id="option2" value="option2" className="bg-[#FFD100 text-[#ffd100] border-[#FFD100]"/>
          <span>Pickup</span>
        </Label>
      </div>
    </RadioGroup>
    </div>
    <div className="mt-10">
      <Button className="bg-[#FFD100] text-black text-[17px] py-[22px]">Get A Price</Button>
    </div>
    </div>
    </div>
    </div>
  </section>
  <section className="bg-[#FFD100] w-full h-[84px] flex justify-center items-center">
      <span className="text-[22px] text-black py-2">WE&apos;RE HERE TO HELP THOSE AFFECTED BY HURRICANE DEBBY. OUR EMERGENCY RESPONSE TEAM IS STANDING BY</span>&nbsp;&nbsp;&nbsp;
      <Button className="bg-[#FFFFFF] text-black text-[22px] rounded-[50px] p-6">24/7 TO HELP YOU RECOVER</Button>
  </section>
  <section className="bg-watermark min-h-[100vh]">
    <div className="grid grid-cols-2">
      <div>
        <Image src={Hero1} alt="Hero Image"/>
      </div>
      <div>
        <p>ABOUT US</p>
        <div>
          <span>CREATED FOR</span>&nbsp;
          <span>THE RELENTLESS</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis quia earum nam optio consequuntur facere! Atque temporibus qui iure provident excepturi natus, quos quisquam nostrum amet ut accusamus odit.</p>
        <div>
          <div className="border">
          <p>250+</p>
          <p>Projects Completed</p>
          </div>
          <div className="border">
          <p>250+</p>
          <p>Projects Completed</p>
          </div>
          <div className="border">
          <p>250+</p>
          <p>Projects Completed</p>
          </div>
        </div>
        <Button>RENT A TRAILER</Button>
      </div>
    </div>
  </section>
</main>
  );
}
