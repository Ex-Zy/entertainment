<script setup lang="ts">
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";

const store = useMoviesStore();
const tvMovies = computed(() =>
  store.movies.filter((m) => m.category === "Movie")
);
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">Movies</h2>
    <CardContainer>
      <MovieCard :movie="movie" v-for="movie of tvMovies" :key="movie.id" />
    </CardContainer>
  </div>
</template>
