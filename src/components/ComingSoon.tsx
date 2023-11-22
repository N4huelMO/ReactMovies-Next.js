import { MovieData } from "@/app/interfaces";
import { formatDate } from "@/helpers/formatDate";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCalendar } from "react-icons/hi";

async function getComingSoonData() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&region=US`
  );

  return data.results.slice(0, 6);
}

const ComingSoon = async () => {
  const comingSoon = await getComingSoonData();

  const comingSoonMovies = comingSoon.map((movie: MovieData) => {
    const { id, title, poster_path, release_date } = movie;

    return {
      id,
      title,
      poster_path,
      release_date,
    };
  });

  return (
    <div className="mt-10">
      <p className="text-3xl md:text-4xl text-violet-200 mb-2">Coming Soon</p>
      <hr className="border-0 h-px mb-4 bg-gradient-to-l from-transparent via-violet-400 to-transparent" />

      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4">
        {comingSoonMovies.map((movie: any) => (
          <div key={movie.id}>
            <Link href={`movie/${movie.id}`}>
              <Image
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                width={500}
                height={500}
                className="rounded-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="Img Coming Soon"
              />
            </Link>
            <div className="font-semibold text-sm mt-3">
              <p className="line-clamp-1"> {movie.title}</p>
              <p className="flex items-center gap-1">
                <HiOutlineCalendar className="text-violet-400" />
                {formatDate(movie.release_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
