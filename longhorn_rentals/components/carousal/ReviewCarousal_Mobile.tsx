"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from "react";
import Review from '../review/Review';

export default function ReviewCarousalMobile() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false, // No loop to easily manage sets of 3 reviews
    skipSnaps: false,
    containScroll: "trimSnaps", // Ensure it trims extra space if fewer slides
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Scroll to the selected set of reviews
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  // Update the selected index when the carousel scrolls
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="md:pt-[40px] md:px-[100px]">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel inner container */}
        <div className="flex">
          {/* First set of 3 reviews */}
          <div className="flex-[0_0_100%]">
            <div className="md:grid md:grid-cols-3 gap-8 md:p-10">
              <Review
                img="/reviews/review2.jpg"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                name="Genene Bell"
                profession="Trailer Rental Customer"
              />
            </div>
          </div>
          
          {/* Second set of 3 reviews */}
          <div className="flex-[0_0_100%]">
            <div className="md:grid md:grid-cols-3 gap-8 p-10">
              <Review
                img="/reviews/review1.png"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                name="John Doe"
                profession="Trailer Rental Customer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center md:mt-16 space-x-4">
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-3 h-3 rounded-full ${
              idx === selectedIndex ? "bg-yellow-500" : "bg-gray-700"
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
