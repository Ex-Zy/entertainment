<script setup lang="ts">
import MainLayout from "@/components/layouts/mainLayout.vue";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavigationBar from "./components/navigation/NavigationBar.vue";
import { useMoviesStore } from "./stores/movies.store";

const store = useMoviesStore();
const { fetchMovies } = store;

// save all moview in store
onMounted(fetchMovies);
</script>

<template>
  <MainLayout>
    <template #navbar>
      <NavigationBar />
    </template>
    <template #page>
      <RouterView />
    </template>
  </MainLayout>
</template>
