<script setup lang="ts">
import useMovies from "@/use/useMovies";
import MovieCard from "../MovieCard.vue";

const { movies, tvTrends } = useMovies();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">Trends Page</h2>
    <div class="flex overflow-auto">
      <MovieCard :movie="movie" v-for="movie of tvTrends" :key="movie.id" />
    </div>
  </div>
  <div class="mt-10">
    <h2 class="text-2lg mb-6">Recommended for you</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieCard :movie="movie" v-for="movie of movies" :key="movie.id" />
    </div>
  </div>
</template>
