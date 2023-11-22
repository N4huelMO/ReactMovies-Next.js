"use client";

import { MovieData } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Trend = ({ trendingMovies }: { trendingMovies: MovieData[] }) => {
  const [visible, setVisible] = useState(10);

  const showButton = () => {
    if (visible <= 10) {
      setVisible((prevValue) => prevValue + 10);
    } else {
      setVisible((prevValue) => prevValue - 10);
    }
  };

  return (
    <>
      <p className="text-3xl md:text-4xl text-violet-200 mb-2">Trending</p>
      <hr className="border-0 h-px mb-4 bg-gradient-to-l from-transparent via-violet-400 to-transparent" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {trendingMovies?.slice(0, visible).map((movie: MovieData) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                width={500}
                height={500}
                className="rounded-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="image"
              />
            </Link>
          </div>
        ))}
      </div>

      <button
        className="bg-violet-500/80 transition-all duration-500 hover:bg-violet-700 uppercase px-4 py-3 mt-5 rounded-lg mx-auto w-full md:w-1/3 flex justify-center"
        onClick={showButton}
      >
        {visible <= 10 ? "Show more" : "Show less"}
      </button>
    </>
  );
};

export default Trend;
