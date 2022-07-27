import { useMoviesStore } from "@/stores/movies.store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const useMovies = () => {
  const store = useMoviesStore();
  const { movies, tvTrends, tvSeries, tvMoviesBoorkmark, tvSeriesBoorkmark } =
    storeToRefs(store);
  const { fetchMovies } = store;

  onMounted(fetchMovies);

  return { movies, tvTrends, tvSeries, tvMoviesBoorkmark, tvSeriesBoorkmark };
};

export default useMovies;
