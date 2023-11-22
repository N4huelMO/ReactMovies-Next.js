import axios from "axios";
import SeriesComponent from "./SeriesComponent";
import { MovieData } from "@/app/interfaces";

async function getSeriesData() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  return data.results;
}

const Series = async () => {
  const seriesData = await getSeriesData();

  const series = seriesData.map((movie: MovieData) => {
    const { id, poster_path } = movie;

    return {
      id,
      poster_path,
    };
  });

  return <SeriesComponent seriesData={series} />;
};

export default Series;
