interface IThumbnailTrending {
  small: string;
  large: string;
}

interface IThumbnailRegular extends IThumbnailTrending {
  medium: string;
}

type Category = "Movie" | "TV series";
type Rating = "PG" | "E" | "18+";

interface IMovie {
  id: number;
  title: string;
  thumbnail: {
    trending?: IThumbnailTrending;
    regular: IThumbnailRegular;
  };
  year: number;
  category: Category;
  rating: Rating;
  isBookmarked: boolean;
  isTrending: boolean;
}

export default IMovie;
