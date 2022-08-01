<script setup lang="ts">
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";

const store = useMoviesStore();
const tvSeries = computed(() =>
  store.movies.filter((m) => m.category === "TV series")
);
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">TV Series</h2>
    <CardContainer>
      <MovieCard :movie="movie" v-for="movie of tvSeries" :key="movie.id" />
    </CardContainer>
  </div>
</template>
