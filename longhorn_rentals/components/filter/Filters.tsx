import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
export default function Filters() {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center border-b-[1px] border-gray-500">
        <div className="text-[24px] flex space-x-[10px]">
            <img src="/svgs/sliders.svg" alt="" />
            <span className="mt-[1px]">FILTER</span>
        </div>
        <div className="underline text-[20px]">
            CLEAR ALL
        </div>
      </div>
      <div className="text-[22px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>WIDTH</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="option-all"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="60" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">60&quot; Wide</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="83" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">83&quot; Wide</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="102" id="option-three" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-three" className="text-[20px]">102&quot; Wide</Label>
          </div>
        </RadioGroup>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>GVMR</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="option-all"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3000" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Below 3,000 GVMR</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="6000" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Below 6,000 GVMR</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10000" id="option-three" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-three" className="text-[20px]">Below 10,000 GVMR</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="uppercase">Trailer Type</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="option-all"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enclosed" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Enclosed</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="car-hauler" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Car Hauler</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="utility" id="option-three" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-three" className="text-[20px]">Utility</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="livestock" id="option-four" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-four" className="text-[20px]">Livestock</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dump" id="option-five" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-five" className="text-[20px]">Dump</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="uppercase">Axles</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="option-all"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3500" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">3,500 lbs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5200" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">5,200 lbs</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}
