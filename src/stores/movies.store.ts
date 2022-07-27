import MoviesApi from "@/api/movies.api";
import type IMovie from "@/types/movie";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore({
  id: "moviesStore",
  state: () => ({
    movies: <IMovie[]>[],
  }),
  getters: {
    tvSeries: ({ movies }) =>
      movies.filter((m: IMovie) => m.category === "TV series"),
    tvMovies: ({ movies }) =>
      movies.filter((m: IMovie) => m.category === "Movie"),
    tvTrends: ({ movies }) => movies.filter((m: IMovie) => m.isTrending),
    tvMoviesBoorkmark(): IMovie[] {
      return this.tvMovies.filter((m: IMovie) => m.isBookmarked);
    },
    tvSeriesBoorkmark(): IMovie[] {
      return this.tvSeries.filter((m: IMovie) => m.isBookmarked);
    },
  },
  actions: {
    async fetchMovies() {
      const movies = await MoviesApi.getAll();

      this.movies = movies;
    },
  },
});
