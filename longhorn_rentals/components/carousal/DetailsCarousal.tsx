"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from "react";

export default function DetailsCarousal() {
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
    <div className="overflow-hidden">
            {/* Navigation Dots */}
            <div className="flex items-center justify-center mt-5 space-x-4">
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? "bg-yellow-500" : "bg-gray-700"
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel inner container */}
        <div className="flex">
          {/* First set of 3 reviews */}
          <div className="flex-[0_0_100%]">
          <div className="flex justify-center mt-4 space-x-4">
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 2"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 3"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 4"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
              </div>
          </div>
          
          {/* Second set of 3 reviews */}
          <div className="flex-[0_0_100%]">
          <div className="flex justify-center mt-4 space-x-4">
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 2"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 3"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 4"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
              </div>
          </div>

          {/* 3rd set */}
          <div className="flex-[0_0_100%]">
          <div className="flex justify-center mt-4 space-x-4">
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 2"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 3"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 4"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
                <img
                  src="/trailers/trailer1.png"
                  alt="Thumbnail 5"
                  className="w-28 h-28 rounded-lg"
                  width="150"
                  height="100"
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}
