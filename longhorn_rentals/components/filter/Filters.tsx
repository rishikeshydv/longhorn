import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Filters() {
  return (
    <div className="text-white text-[30px]">
      <div className="flex justify-between border-b-[1px] border-gray-500">
        <div>
            <img src="/svgs/sliders.svg" alt="" />
            <span>FILTER</span>
        </div>
        <div className="underline">
            CLEAR ALL
        </div>
      </div>
      <div>
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
