<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";
import MoviesView from "../MoviesView.vue";

const store = useMoviesStore();
const tvMovies = computed(() =>
  store.movies.filter((m) => m.category === "Movie")
);
</script>

<template>
  <MoviesView title="Movies" :movies="tvMovies" />
</template>
