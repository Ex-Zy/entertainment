<script setup lang="ts">
import type IPosterRegular from "@/types/poster.regular.js";

defineProps<{
  poster: IPosterRegular;
  title: string;
}>();
</script>
<template>
  <picture>
    <source media="(min-width: 768px)" :srcset="poster.medium" />
    <source media="(min-width: 1024px)" :srcset="poster.large" />
    <img :src="poster.small" :alt="`Poster ${title}`" />
  </picture>
</template>
