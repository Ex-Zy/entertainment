<script setup lang="ts">
import MovieCard from "../MovieCard.vue";
import CardContainer from "../CardContainer.vue";
import { useMoviesStore } from "@/stores/movies.store";
import { computed } from "vue";

const store = useMoviesStore();
const tvMoviesBoorkmark = computed(() =>
  store.movies.filter((m) => m.category === "Movie" && m.isBookmarked)
);
const tvSeriesBoorkmark = computed(() =>
  store.movies.filter((m) => m.category === "TV series" && m.isBookmarked)
);
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2lg font-light mb-6">Bookmarked Movies</h2>
    <CardContainer>
      <MovieCard
        :movie="movie"
        v-for="movie of tvMoviesBoorkmark"
        :key="movie.id"
      />
    </CardContainer>
  </div>
  <div class="mt-10">
    <h2 class="text-2lg font-light mb-6">Bookmarked TV Series</h2>
    <CardContainer>
      <MovieCard
        :movie="movie"
        v-for="movie of tvSeriesBoorkmark"
        :key="movie.id"
      />
    </CardContainer>
  </div>
</template>
