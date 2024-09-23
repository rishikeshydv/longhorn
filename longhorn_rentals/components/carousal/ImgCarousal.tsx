"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

export default function ImgCarousal() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true, // Enable looping for infinite scroll
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

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

  // Auto scroll logic
  useEffect(() => {
    if (!embla) return;

    const autoScroll = setInterval(() => {
      embla.scrollNext(); // Automatically scroll to the next slide
    }, 2000); // Adjust the time interval (3000ms = 3 seconds)

    return () => clearInterval(autoScroll); // Clear the interval on component unmount
  }, [embla]);

  // const images = [
  //   { src: "/trailers/trailer2.png", alt: "Trailer 1", width: 300, height: 400 },
  //   { src: "/trailers/trailer2.png", alt: "Trailer 2", width: 300, height: 300 },
  //   { src: "/trailers/trailer2.png", alt: "Trailer 3", width: 300, height: 400 },
  //   { src: "/trailers/trailer2.png", alt: "Trailer 4", width: 300, height: 400 },
  // ];


  const images = [
    { src: "/trailers/2021-pj/2021-pj-1.png", alt: "Trailer 1", width: 300, height: 400 },
    { src: "/trailers/2024-enclosed/2024-enclosed-1.png", alt: "Trailer 2", width: 300, height: 400 },
    { src: "/trailers/dump/dump-1.png", alt: "Trailer 3", width: 300, height: 400 },
    { src: "/trailers/livestock/livestock-1.png", alt: "Trailer 4", width: 300, height: 400 },
  ];

  return (
    <div className="overflow-hidden px-[100px]">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel Inner Container */}
        <div className="flex">
          {Array(1)
            .fill(images)
            .flat()
            .map((image, index) => (
              <div className="flex-[0_0_100%]" key={index}>
                <div className="flex justify-center gap-6 px-4 pt-[103px] pb-[70px]">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg object-cover"
                      width={img.width}
                      height={img.height}
                    />
                  ))}
                </div>
              </div>
            ))}
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
