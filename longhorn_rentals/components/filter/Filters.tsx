import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            ENTER YOUR DATA
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>LENGTH</AccordionTrigger>
          <AccordionContent>
            ENTER YOUR DATA
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>GVMR</AccordionTrigger>
          <AccordionContent>
            ENTER YOUR DATA
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>CARGO CAPACITY</AccordionTrigger>
          <AccordionContent>
            ENTER YOUR DATA
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>PULL TYPE</AccordionTrigger>
          <AccordionContent>
            ENTER YOUR DATA
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}
