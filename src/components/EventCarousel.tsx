// components/EventCarousel.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "./EventCard"; // Đảm bảo có component này

export default function EventCarousel({ events }: { events: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight />
      </button>

      {/* Embla container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="min-w-[90%] sm:min-w-[50%] lg:min-w-[33.333%] flex-shrink-0"
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
