<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies.store";
import { onMounted } from "vue";

// Store
const moviesStore = useMoviesStore();

// hooks
onMounted(moviesStore.fetchMovies);
</script>

<template>
  <h1>Trends Page</h1>
</template>
