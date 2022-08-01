<script setup lang="ts">
import MovieCard from "./MovieCard.vue";
import CardContainer from "./CardContainer.vue";
import type IMovie from "@/types/movie";

defineProps<{
  title: string;
  movies: IMovie[];
  layout?: "horizontal" | "vertical";
}>();
</script>

<template>
  <div class="mb-10">
    <h2 class="text-2lg mb-6">{{ title }}</h2>
    <CardContainer :layout="layout || 'vertical'">
      <MovieCard
        v-for="movie of movies"
        :key="movie.id"
        :mediumSize="layout === 'horizontal'"
        :movie="movie"
      />
    </CardContainer>
  </div>
</template>
