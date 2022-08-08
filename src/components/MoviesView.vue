<script setup lang="ts">
import MovieCard from "./card/MovieCard.vue";
import CardContainer from "./CardContainer.vue";
import type IMovie from "@/types/movie";

defineProps<{
  title: string;
  movies: IMovie[];
  layout?: "horizontal" | "vertical";
}>();
</script>

<template>
  <div :class="{ 'mb-10': !layout }">
    <h2 class="text-2lg md:text-2xl mb-4 lg:mb-8">{{ title }}</h2>
    <div v-if="!movies.length" class="text-2xl mt-[-1rem] text-center">
      No movies for display
    </div>
    <CardContainer
      v-else
      :layout="layout || 'vertical'"
      :class="{ 'pb-6 md:pb-10': layout }"
    >
      <MovieCard
        v-for="movie of movies"
        :key="movie.id"
        :movie="movie"
        :class="{ 'is-trending': layout === 'horizontal' }"
      />
    </CardContainer>
  </div>
</template>
