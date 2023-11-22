"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { MovieData } from "@/app/interfaces";

const SeriesComponent = ({ seriesData }: { seriesData: MovieData[] }) => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl md:text-4xl text-violet-200 mb-2">
        Top Rated Anime & TV Shows
      </h2>
      <hr className="border-0 h-px mb-2 md:mb-1 bg-gradient-to-l from-transparent via-violet-400 to-transparent" />

      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={10}
        loop={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {seriesData.map((series: MovieData) => (
          <SwiperSlide key={series.id}>
            <Link href={`series/${series.id}`}>
              <Image
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                height={500}
                width={500}
                className="rounded-lg transition-all duration-300 hover:brightness-125 scale-95 hover:scale-[.98]"
                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                alt="series image"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SeriesComponent;
