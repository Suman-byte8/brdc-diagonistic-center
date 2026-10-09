"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { heroBanners } from '@/app/data/homeData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef               = useRef(null);
  const displayedBanners        = heroBanners.filter((b) => b.display);

  if (displayedBanners.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-brdc-soft">
      <div className="relative w-full aspect-[2/1]">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          className="absolute inset-0 h-full w-full"
        >
          {displayedBanners.map((banner, i) => (
            <SwiperSlide key={banner.id}>
              <Link href={banner.link} className="relative block h-full w-full">
                <Image
                  src={banner.imageSrc}
                  alt={banner.altText}
                  fill
                  className="object-contain"
                  priority={i === 0}
                  sizes="100vw"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {displayedBanners.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brdc-primary/15 bg-white/95 text-brdc-primary shadow-md transition hover:bg-brdc-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brdc-primary sm:left-6 sm:h-12 sm:w-12"
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brdc-primary/15 bg-white/95 text-brdc-primary shadow-md transition hover:bg-brdc-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brdc-primary sm:right-6 sm:h-12 sm:w-12"
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-5">
              {displayedBanners.map((banner, i) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  aria-label={`Go to banner ${i + 1}`}
                  aria-current={i === activeIdx ? 'true' : undefined}
                  className={`h-2 rounded-full border border-white/80 shadow-sm transition-all ${
                    i === activeIdx ? 'w-6 bg-brdc-primary' : 'w-2 bg-white/80 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
