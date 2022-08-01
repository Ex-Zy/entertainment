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
    <div v-if="!movies.length" class="text-2xl mt-[-1rem]">No movies for display</div>
    <CardContainer v-else :layout="layout || 'vertical'">
      <MovieCard
        v-for="movie of movies"
        :key="movie.id"
        :mediumSize="layout === 'horizontal'"
        :movie="movie"
      />
    </CardContainer>
  </div>
</template>
