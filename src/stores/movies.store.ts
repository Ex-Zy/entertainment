import MoviesApi from "@/api/movies.api";
import type IMovie from "@/types/movie";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore({
  id: "moviesStore",
  state: () => ({
    movies: [] as IMovie[],
  }),
  actions: {
    async fetchMovies() {
      const movies = await MoviesApi.getAll();

      this.movies = movies;
    },
    setBookmarkMovie(id: number, isBorkmarked: boolean) {
      const movie = this.movies.find((m) => m.id === id);

      if (movie) {
        movie.isBookmarked = isBorkmarked;
      }
    },
  },
});
