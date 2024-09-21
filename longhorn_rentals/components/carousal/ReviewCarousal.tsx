"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from "react";
import Review from '../review/Review';

export default function ReviewCarousal() {
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
     // Auto-scroll effect
     const autoScroll = setInterval(() => {
      // Get the current index
const currentIndex = embla.selectedScrollSnap();
const totalCards = embla.scrollSnapList().length;

      // Check if the current index is the last one
if (currentIndex === totalCards - 1) {
  embla.scrollTo(0); // Reset to the first card
} else {
  embla.scrollNext(); // Scroll to the next slide
}
}, 2000); // 2 seconds interval

return () => {
  clearInterval(autoScroll); // Clear the interval on component unmount
};
  }, [embla, onSelect]);

  return (
    <div className="pt-[40px] px-[100px]">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel inner container */}
        <div className="flex">
          {/* First set of 3 reviews */}
          <div className="flex-[0_0_100%]">
            <div className="grid grid-cols-3 gap-8 p-10">
              <Review
                img="/reviews/review2.jpg"
                content="Great Service, very responsive and respectful. I would recommend them to anyone."
                name="Genene Bell"
                profession="Trailer Rental Customer"
              />
              <Review
                img="/reviews/review1.png"
                content="I had a great experience with Longhorn Rentals. They were very professional and the trailer was in great condition."
                name="Vladislav Krishtop"
                profession="Trailer Rental Customer"
              />
              <Review
                img="/reviews/review3.png"
                content="I would definitely recommend Longhorn Rentals to anyone looking for a trailer. They were very professional and the trailer was in great condition."
                name="Carlos A. Rodriguez"
                profession="Trailer Rental Customer"
              />
            </div>
          </div>
          
          {/* Second set of 3 reviews */}
          <div className="flex-[0_0_100%]">
            <div className="grid grid-cols-3 gap-8 p-10">
              <Review
                img="/reviews/review4.jpg"
                content=" Good quality trailers and great customer service. I would recommend them to anyone."
                name="Blaike Komieter"
                profession="Trailer Rental Customer"
              />
              <Review
                img="/reviews/review5.webp"
                content="What a great experience! I would recommend Longhorn Rentals to anyone looking for a trailer."
                name="George Ruiz"
                profession="Trailer Rental Customer"
              />
              <Review
                img="/reviews/review6.jpg"
                content="I had a great experience with Longhorn Rentals. They were very professional and the trailer was in great condition."
                name="Christian Dewey"
                profession="Trailer Rental Customer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center mt-16 space-x-4">
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
