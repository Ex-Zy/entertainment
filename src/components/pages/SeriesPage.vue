<script setup lang="ts">
import useMovies from "@/use/useMovies";
import MovieCard from "../MovieCard.vue";

const { tvSeries } = useMovies();
</script>

<template>
  <div class="mt-10">
    <h2 class="text-2lg mb-6">TV Series</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieCard :movie="movie" v-for="movie of tvSeries" :key="movie.id" />
    </div>
  </div>
</template>
