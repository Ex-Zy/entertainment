<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";
import MoviesView from "../MoviesView.vue";

const store = useMoviesStore();
const tvTrends = computed(() => store.movies.filter((m) => m.isTrending));
const tvRecomends = computed(() =>
  [...store.movies].sort((a, b) => b.year - a.year)
);
</script>

<template>
  <MoviesView title="Trends Page" :movies="tvTrends" layout="horizontal" />
  <MoviesView title="Recommended for you" :movies="tvRecomends" />
</template>
