<script setup lang="ts">
import type IPosterTrending from "@/types/poster.trending.js";

defineProps<{
  poster: IPosterTrending;
  title: string;
}>();
</script>
<template>
  <picture>
    <source media="(min-width: 768px)" :srcset="poster.large" />
    <img :src="poster.small" :alt="`Poster ${title}`" />
  </picture>
</template>
