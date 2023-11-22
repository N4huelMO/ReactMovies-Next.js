import { GenreParams, Params } from "@/app/interfaces";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { formatDate } from "@/helpers/formatDate";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCalendar, HiOutlineClock, HiStar } from "react-icons/hi";
import type { Metadata, ResolvingMetadata } from "next";

async function getMovieData(id: string) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  return data;
}

async function getMovieCast(id: string) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  return data;
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  return {
    title: data.title,
  };
}

const page = async ({ params }: Params) => {
  const movie = await getMovieData(params.id);

  const casting = await getMovieCast(params.id);

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    runtime,
    vote_average,
    release_date,
    genres,
  } = movie;

  const { cast } = casting;

  return (
    <>
      <Header />

      <div
        className="sm:bg-cover bg-cover bg-center bg-no-repeat h-0 md:h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) , rgba(10, 10,10, 0.8 )  ), url(${`${
            movie && `https://www.themoviedb.org/t/p/original${backdrop_path}`
          }`})`,
        }}
      >
        <div className="w-5/6 sm:w-5/6 mx-auto relative top-28 xl:top-40 bg-neutral-900 md:bg-neutral-800 rounded-md md:bg-opacity-70 p-5">
          <div className="flex flex-col items-center md:items-start md:flex-row text-white">
            <Image
              priority
              width={500}
              height={500}
              src={`https://image.tmdb.org/t/p/w780${poster_path}`}
              alt="Movie img"
              className="w-auto md:w-72 xl:w-96 opacity-100 rounded-lg"
            />

            <div className="sm:ml-4 mt-6">
              <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
              <div className="flex">
                {genres?.slice(0, 4).map((genre: GenreParams, i: number) => (
                  <p key={genre.id} className="flex mr-1 mt-2">
                    {genre.name}string
                    {i === genres.slice(0, 4).length - 1 ? "" : ","}
                  </p>
                ))}
              </div>
              <p className="md:text-xl mt-2 md:pr-3 ">{overview}</p>

              <p className="mt-5 font-semibold text-lg">Cast:</p>

              <div className="grid grid-cols-2">
                {cast
                  ?.slice(0, 10)
                  .map((actors: { id: string; name: string }) => (
                    <p key={actors.id}>{actors.name}</p>
                  ))}
              </div>

              <div className="mt-5 mb-10 xl:flex gap-4 text-xl">
                <p className="flex items-center gap-1">
                  Rating: <HiStar className="text-violet-400" />
                  {vote_average?.toFixed(1)}
                </p>
                <p className="flex items-center gap-1">
                  Duration: <HiOutlineClock className="text-violet-400" />
                  {runtime} min
                </p>
                <p className="flex items-center gap-1">
                  Release Date:
                  <HiOutlineCalendar className="text-violet-400" />
                  {formatDate(release_date)}
                </p>
              </div>

              <Link
                href={`https://www.themoviedb.org/movie/${params.id}`}
                target="_blank"
                className="flex justify-center w-full xl:w-1/3 bg-violet-500/80 transition-all duration-500 hover:bg-violet-700 uppercase px-4 py-3 rounded-lg mx-auto xl:mx-0"
              >
                More details
              </Link>
            </div>
          </div>
        </div>
        <div className="relative top-32 md:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
