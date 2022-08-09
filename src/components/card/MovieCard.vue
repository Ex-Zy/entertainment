<script setup lang="ts">
import type IMovie from "@/types/movie";
import MovieCardDescription from "./MovieCardDescription.vue";
import MovieCardMedia from "./MovieCardMedia.vue";
import MovieCardBookmarkButton from "./MovieCardBookmarkButton.vue";
import { computed } from "vue";

const props = defineProps<{
  movie: IMovie;
}>();

const iconName = computed(() => {
  return `category-${props.movie.category
    .split(" ")
    .join("-")
    .toLocaleLowerCase()}`;
});
</script>
<template>
  <div class="card relative flex flex-col">
    <MovieCardMedia
      :isTrending="movie.isTrending"
      :title="movie.title"
      :posterRegular="movie.thumbnail.regular"
      :posterTranding="movie.thumbnail.trending"
    />
    <MovieCardDescription
      :year="movie.year"
      :category="movie.category"
      :rating="movie.rating"
      :title="movie.title"
      :iconName="iconName"
    />
    <MovieCardBookmarkButton :isBookmarked="movie.isBookmarked" />
    <!-- <button type="button" class="card__play absolute flex cursor-pointer">
      <SvgIcon name="play" class="w-3 h-3 m-auto" />
      <span class="text-md">Play</span>
    </button> -->
  </div>
</template>

<style lang="scss">
.card {
  &.is-trending {
    width: 70%;
    flex-shrink: 0;
    flex-grow: 0;
    @media (min-width: 768px) {
      width: 65%;
    }
    @media (min-width: 1024px) {
      width: 38%;
    }
  }
}
</style>
