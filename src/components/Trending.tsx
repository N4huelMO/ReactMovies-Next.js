import axios from "axios";
import Trend from "./Trend";
import { MovieData } from "@/app/interfaces";

async function getTrendingData() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );

  return data.results;
}

const Trending = async () => {
  const trending = await getTrendingData();

  const trendingMovies = trending.map((movie: MovieData) => {
    const { id, poster_path } = movie;

    return {
      id,
      poster_path,
    };
  });

  return <Trend trendingMovies={trendingMovies} />;
};

export default Trending;
