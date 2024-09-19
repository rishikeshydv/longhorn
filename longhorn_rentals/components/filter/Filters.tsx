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
          <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Option Two</Label>
          </div>
        </RadioGroup>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>LENGTH</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Option Two</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>GVMR</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Option Two</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>CARGO CAPACITY</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Option Two</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>PULL TYPE</AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one"  className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-one" className="text-[20px]">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" className="text-[#ffd100] bg-gray-400"/>
            <Label htmlFor="option-two" className="text-[20px]">Option Two</Label>
          </div>
        </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}
