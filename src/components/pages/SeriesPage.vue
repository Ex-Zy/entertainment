<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";
import MoviesView from "../MoviesView.vue";

const store = useMoviesStore();
const tvSeries = computed(() =>
  store.movies.filter((m) => m.category === "TV series")
);
</script>

<template>
  <MoviesView title="TV Series" :movies="tvSeries" />
</template>
