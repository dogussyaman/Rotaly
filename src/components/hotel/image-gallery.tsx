"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { HotelNew } from "@/types/hotel";

const defaultImages = [
  { src: "/images/detail3.jpg", alt: "Hotel Image 1" },
  { src: "/images/detail2.jpg", alt: "Hotel Image 2" },
  { src: "/images/detail5.jpg", alt: "Hotel Image 3" },
  { src: "/images/detail4.jpg", alt: "Hotel Image 4", overlay: "16+" },
];

interface ImageGalleryProps {
  hotel?: HotelNew | null;
}

const ImageGallery = ({ hotel }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Hotel images'ları kullan, yoksa default images
  const images = hotel?.images && hotel.images.length > 0 
    ? hotel.images.map((img, index) => ({
        src: img.url,
        alt: `${hotel.name} - Image ${index + 1}`,
        overlay: index === hotel.images.length - 1 && hotel.images.length > 4 ? `${hotel.images.length - 4}+` : undefined
      }))
    : defaultImages;

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full lg:max-w-[700px]">
      {/* Ana büyük görsel alanı */}
      <div className="relative overflow-hidden rounded-2xl mb-4" ref={emblaRef}>
        <div className="flex">
          {images.map((image, idx) => (
            <div key={idx} className="flex-[0_0_100%] relative h-[300px] sm:h-[400px] lg:h-[550px] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Sol-sağ oklar */}
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow z-10"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow z-10"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>

      {/* Thumbnail'lar — eski tasarıma göre */}
      <div className="grid grid-cols-4 gap-2 w-full">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`relative w-full h-[100px] sm:h-[150px] lg:h-[210px] rounded-xl overflow-hidden group border-2 transition-all ${
              selectedIndex === idx
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover ${image.overlay ? "opacity-60" : ""}`}
            />
            {image.overlay && (
              <span className="absolute inset-0 flex items-center justify-center z-10 text-white text-lg font-bold drop-shadow-lg">
                {image.overlay}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
