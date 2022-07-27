interface IThumbnailTrending {
  small: string;
  large: string;
}

interface IThumbnailRegular extends IThumbnailTrending {
  medium: string;
}

interface IMovie {
  id: number;
  title: string;
  thumbnail: {
    trending?: IThumbnailTrending;
    regular: IThumbnailRegular;
  };
  year: number;
  category: "Movie" | "TV series";
  rating: "PG" | "E" | "18+";
  isBookmarked: boolean;
  isTrending: boolean;
}

export default IMovie;
