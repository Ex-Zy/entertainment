<script setup lang="ts">
import type IMovie from "@/types/movie";

defineProps<{
  movie: IMovie;
}>();
</script>
<template>
  <div>{{ movie }}</div>
</template>
