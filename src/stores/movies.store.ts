import MoviesApi from "@/api/movies.api";
import type IMovie from "@/types/movie";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore({
  id: "moviesStore",
  state: () => ({
    movies: <IMovie[]>[],
  }),
  actions: {
    async fetchMovies() {
      const data = await MoviesApi.getAll();

      this.movies = data;
    },
  },
});
