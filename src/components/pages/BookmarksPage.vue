<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";
import MoviesView from "../MoviesView.vue";

const store = useMoviesStore();
const tvMoviesBoorkmark = computed(() =>
  store.movies.filter((m) => m.category === "Movie" && m.isBookmarked)
);
const tvSeriesBoorkmark = computed(() =>
  store.movies.filter((m) => m.category === "TV series" && m.isBookmarked)
);
</script>

<template>
  <MoviesView title="Bookmarked Movies" :movies="tvMoviesBoorkmark" />
  <MoviesView title="Bookmarked TV Series" :movies="tvSeriesBoorkmark" />
</template>
