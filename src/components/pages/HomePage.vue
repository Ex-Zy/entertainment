<script setup lang="ts">
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";

const store = useMoviesStore();
const tvTrends = computed(() => store.movies.filter((m) => m.isTrending));
const tvRecomends = computed(() =>
  [...store.movies].sort((a, b) => b.year - a.year)
);
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg mb-6">Trends Page</h2>
    <div class="flex gap-4 overflow-auto">
      <MovieCard
        medium-size
        :movie="movie"
        v-for="movie of tvTrends"
        :key="movie.id"
      />
    </div>
  </div>
  <div class="mt-10">
    <h2 class="text-2lg mb-6">Recommended for you</h2>
    <CardContainer>
      <MovieCard :movie="movie" v-for="movie of tvRecomends" :key="movie.id" />
    </CardContainer>
  </div>
</template>
