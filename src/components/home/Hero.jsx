"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { heroBanners } from '@/app/data/homeData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const displayedBanners = heroBanners.filter((banner) => banner.display);

  useEffect(() => {
    // Mounting gate: set once after hydration to avoid SSR/Swiper mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (displayedBanners.length === 0) {
    return null;
  }

  if (!mounted) {
    return <div className="w-full aspect-[2/1] bg-slate-900" />;
  }

  return (
    <section className="relative w-full bg-slate-900">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper aspect-[2/1]"
      >
        {displayedBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link} className="block w-full h-full relative">
              <Image 
                src={banner.imageSrc}
                alt={banner.altText}
                fill
                className="object-cover"
                priority={banner.id === 1}
                sizes="100vw"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}