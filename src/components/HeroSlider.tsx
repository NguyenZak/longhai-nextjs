// components/HeroSlider.tsx
"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useCallback } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    desktop: "/slider-1.webp",
    mobile: "/slider-1-mobile.webp"
  },
  {
    desktop: "/slider-2.webp",
    mobile: "/slider-2-mobile.webp"
  },
  {
    desktop: "/slider-3.webp",
    mobile: "/slider-3-mobile.webp"
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <>
      <div className="h-16 sm:h-17" />
    <div className="bg-white-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((src, index) => (
                <div
                  className="w-full px-3 relative shrink-0 aspect-[3/2] sm:aspect-[10/3]"
                  key={index}
                >
                  <>
  <Image
    src={src.mobile}
    alt={`Slide ${index + 1}`}
    fill
    className="sm:hidden object-cover w-full h-full"
  />
  <Image
    src={src.desktop}
    alt={`Slide ${index + 1}`}
    fill
    className="hidden sm:block object-cover w-full h-full"
  />
</>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-1 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full shadow-lg border border-gray-300 transition hover:bg-gray-200"
          >
            <ChevronLeft className="w-6 h-6 transition-colors" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full shadow-lg border border-gray-300 transition hover:bg-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 transition-colors" />
          </button>
        </div>
      </div>
        </div>
    </>
  );
}
