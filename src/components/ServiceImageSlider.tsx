'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface ServiceImageSliderProps {
  images: string[];
  title: string;
}

export function ServiceImageSlider({ images, title }: ServiceImageSliderProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg group">
        <Image 
          src={images[0]} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden w-full h-[300px] md:h-[450px] rounded-2xl shadow-lg group relative" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src, index) => (
          <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
            <Image 
              src={src} 
              alt={`${title} - Hình ${index + 1}`} 
              fill 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/50" />
        ))}
      </div>
    </div>
  );
}
