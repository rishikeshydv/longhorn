"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from "react";

export default function ImgCarousalMobile() {
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
    <div className="overflow-hidden px-[50px] md:px-[100px]">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel inner container */}
        <div className="flex">
          {/* First set of 3 reviews */}
          <div className="flex-[0_0_100%]">
          <div className="flex gap-10 overflow-x-auto px-4 pt-[50px] md:pt-[103px] md:pb-[70px]">
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 1"
                className="rounded-lg"
                width="300"
                height="400"
                style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
            </div>
          </div>
          
          {/* Second set of 3 reviews */}
          <div className="flex-[0_0_100%]">
          <div className="flex gap-10 overflow-x-auto px-4 pt-[50px] md:pt-[103px] md:pb-[70px]">
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 1"
                className="rounded-lg"
                width="300"
                height="400"
                style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="flex-[0_0_100%]">
          <div className="flex gap-10 overflow-x-auto px-4 pt-[50px] md:pt-[103px] md:pb-[70px]">
              <img
                src="/trailers/trailer2.png"
                alt="Trailer 1"
                className="rounded-lg"
                width="300"
                height="400"
                style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center mt-10 space-x-4">
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
