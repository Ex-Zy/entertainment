<script setup lang="ts">
import useMovies from "@/use/useMovies";
import MovieCard from "../MovieCard.vue";

const { tvMoviesBoorkmark, tvSeriesBoorkmark } = useMovies();
</script>

<template>
  <div class="mt-10">
    <h2 class="text-2lg mb-6">Bookmarked Movies</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieCard
        :movie="movie"
        v-for="movie of tvMoviesBoorkmark"
        :key="movie.id"
      />
    </div>
  </div>
  <div v-if="tvSeriesBoorkmark.length" class="mt-10">
    <h2 class="text-2lg mb-6">Bookmarked TV Series</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieCard
        :movie="movie"
        v-for="movie of tvSeriesBoorkmark"
        :key="movie.id"
      />
    </div>
  </div>
</template>
