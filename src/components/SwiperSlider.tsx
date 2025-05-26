"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroContent } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";

export default function SwiperSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="h-full"
    >
      {heroContent.map((content, idx) => {
        const { title, subtitle, imgSrc, ctaText, ctaLink } = content;
        return (
          <SwiperSlide key={idx}>
            <div className="h-full">
              <Image
                src={imgSrc}
                alt="Umesh Homestay Hero"
                fill
                className="object-cover brightness-50"
                placeholder="blur"
                blurDataURL="/outer-view1.jpg"
                priority
              />
              <div className="z-10 absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/3 flex flex-col items-center justify-center text-white px-4 text-left">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                  {title}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl mb-4 md:mb-6 max-w-md drop-shadow-md">
                  {subtitle}
                </p>
                <Link
                  href={ctaLink}
                  className="bg-accent text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-opacity-80 text-sm sm:text-base transition-transform transform hover:scale-105"
                  aria-label={ctaText}
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
