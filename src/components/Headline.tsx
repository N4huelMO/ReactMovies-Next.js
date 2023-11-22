import axios from "axios";
import { HiOutlineClock, HiStar, HiOutlineCalendar } from "react-icons/hi";
import { formatDate } from "../helpers/formatDate";

async function getData() {
  const resp = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );

  const id = resp.data.results[0].id;

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  return data;
}

const pInfo = "flex items-center gap-1";

const Headline = async () => {
  const movie = await getData();

  const {
    backdrop_path,
    title,
    tagline,
    overview,
    runtime,
    vote_average,
    release_date,
  } = movie;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) , rgba(10, 10,10, 0.8 )  ), url(${`${
          movie && `https://www.themoviedb.org/t/p/original${backdrop_path}`
        }`})`,
      }}
      className="sm:bg-cover bg-cover bg-center bg-no-repeat h-screen"
    >
      <div className="px-4 md:h-2/3 md:w-5/6 text-white mx-auto flex flex-col justify-center">
        <div>
          <h1 className="text-5xl w-full md:text-7xl 2xl:text-8xl font-bold mt-36 md:mt-72 md:w-11/12	xl:w-4/5">
            {title}
          </h1>
        </div>

        <div className="xl:ml-2">
          <div className="2xl:w-7/12">
            <div className="mt-10 w-fit rounded-md bg-violet-200/10 px-4 py-4">
              <p className="text-2xl md:text-3xl text-violet-300">{tagline}</p>

              <p className="text-sm md:text-base mt-3 tracking-wide">
                {overview}
              </p>
            </div>
          </div>

          <div className="mt-5 mb-10 flex justify-center gap-4 text-sm bg-violet-200/10 sm:w-fit md:px-4 py-2 rounded-md">
            <p className={pInfo}>
              Rating: <HiStar className="text-violet-400" />
              {vote_average?.toFixed(1)}
            </p>
            <p className={pInfo}>
              Duration: <HiOutlineClock className="text-violet-400" />
              {runtime} min
            </p>
            <p className={pInfo}>
              <HiOutlineCalendar className="text-violet-400" />
              {formatDate(release_date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
