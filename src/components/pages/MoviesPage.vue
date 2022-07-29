<script setup lang="ts">
import useMovies from "@/use/useMovies";
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";

const { movies } = useMovies();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">Movies</h2>
    <CardContainer>
      <MovieCard :movie="movie" v-for="movie of movies" :key="movie.id" />
    </CardContainer>
  </div>
</template>
