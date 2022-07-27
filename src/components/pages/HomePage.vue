<script setup lang="ts">
import useMovies from "@/use/useMovies";
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";

const { movies, tvTrends } = useMovies();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">Trends Page</h2>
    <div class="flex gap-4 col overflow-auto">
      <MovieCard
        class="w-4/5 shrink-0 grow-0 h-[140px]"
        :movie="movie"
        v-for="movie of tvTrends"
        :key="movie.id"
      />
    </div>
  </div>
  <div class="mt-10">
    <h2 class="text-2lg mb-6">Recommended for you</h2>
    <CardContainer>
      <MovieCard :movie="movie" v-for="movie of movies" :key="movie.id" />
    </CardContainer>
  </div>
</template>
