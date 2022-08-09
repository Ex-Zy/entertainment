<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import type IMovie from "@/types/movie";
import { computed, ref } from "vue";
import MoviesView from "../MoviesView.vue";

const store = useMoviesStore();
const searchValue = ref("");
const foundMovies = computed<IMovie[]>(() => {
  if (searchValue.value.trim().length) {
    return store.movies.filter(({ title }) =>
      title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase())
    );
  }

  return [];
});
const tvMoviesBoorkmark = computed<IMovie[]>(() =>
  store.movies.filter(
    (m) => m.category.toLowerCase() === "movie" && m.isBookmarked
  )
);
const tvSeriesBoorkmark = computed<IMovie[]>(() =>
  store.movies.filter(
    (m) => m.category.toLowerCase() === "tv series" && m.isBookmarked
  )
);
const handleSearch = (val: string) => (searchValue.value = val);
</script>

<template>
  <SearchMovies @search="handleSearch" />
  <MoviesView
    v-if="searchValue.length"
    :title="`Found ${foundMovies.length} results for ‘${searchValue}’`"
    :movies="foundMovies"
  />
  <template v-else>
    <MoviesView title="Bookmarked Movies" :movies="tvMoviesBoorkmark" />
    <MoviesView title="Bookmarked TV Series" :movies="tvSeriesBoorkmark" />
  </template>
</template>
