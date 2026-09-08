'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const services = [
  { src: '/service-kham.jpg', title: 'Khám Chữa Bệnh' },
  { src: '/service-sieuam.jpg', title: 'Siêu Âm Thú Y' },
  { src: '/service-xray.jpg', title: 'Chụp X-Ray Kỹ Thuật Số' },
  { src: '/service-kinhhienvi.jpg', title: 'Soi Kính Hiển Vi' },
  { src: '/service-xetnghiem1.jpg', title: 'Xét Nghiệm Sinh Hóa' },
  { src: '/service-xetnghiem2.jpg', title: 'Xét Nghiệm Huyết Học' },
  { src: '/service-phauthuat1.jpg', title: 'Phẫu Thuật Mô Mềm' },
  { src: '/service-phauthuat2.jpg', title: 'Phẫu Thuật Xương Khớp' },
];

export function ServiceCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

  return (
    <div className="overflow-hidden w-full max-w-6xl mx-auto rounded-2xl" ref={emblaRef}>
      <div className="flex">
        {services.map((service, index) => (
          <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4" key={index}>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md group">
              <Image 
                src={service.src} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-6 w-full text-center">{service.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
