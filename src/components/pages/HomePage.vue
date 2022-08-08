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
const tvTrends = computed<IMovie[]>(() =>
  store.movies.filter((m) => m.isTrending)
);
const tvRecomends = computed<IMovie[]>(() =>
  [...store.movies].sort((a, b) => b.year - a.year)
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
    <MoviesView title="Trending" :movies="tvTrends" layout="horizontal" />
    <MoviesView title="Recommended for you" :movies="tvRecomends" />
  </template>
</template>
