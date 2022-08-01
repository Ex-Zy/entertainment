<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import type IMovie from "@/types/movie";
import { computed, ref } from "vue";
import MoviesView from "../MoviesView.vue";

const store = useMoviesStore();
const searchValue = ref("");
const tvMovies = computed<IMovie[]>(() =>
  store.movies.filter((m) => m.category === "Movie")
);
const foundMovies = computed<IMovie[]>(() => {
  if (searchValue.value.trim().length) {
    return tvMovies.value.filter(({ title }) =>
      title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase())
    );
  }

  return [];
});

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
    <MoviesView title="Movies" :movies="tvMovies" />
  </template>
</template>
