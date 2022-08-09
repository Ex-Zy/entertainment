import type IPosterRegular from "./poster.regular";
import type IPosterTrending from "./poster.trending";

interface IMovie {
  id: number;
  title: string;
  thumbnail: {
    trending: IPosterTrending;
    regular: IPosterRegular;
  };
  year: number;
  category: "Movie" | "TV series";
  rating: "PG" | "E" | "18+";
  isBookmarked: boolean;
  isTrending: boolean;
}

export default IMovie;
