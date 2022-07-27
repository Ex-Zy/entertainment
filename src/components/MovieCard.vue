<script setup lang="ts">
import type IMovie from "@/types/movie";

defineProps<{
  movie: IMovie;
}>();
</script>
<template>
  <a
    href="#"
    class="block p-6 max-w-sm h-[110px] md:h-[140px] lg:h-[174px] bg-center bg-no-repeat bg-cover rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    :style="`background-image: url('${movie.thumbnail.regular.small}')`"
  >

  </a>
</template>
