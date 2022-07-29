<script setup lang="ts">
import useMovies from "@/use/useMovies";
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";

const { tvSeries } = useMovies();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">TV Series</h2>
    <CardContainer>
      <MovieCard :movie="movie" v-for="movie of tvSeries" :key="movie.id" />
    </CardContainer>
  </div>
</template>
