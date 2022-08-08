<script setup lang="ts">
import type IMovie from "@/types/movie";
import MovieCardDescription from "./MovieCardDescription.vue";
import MovieCardMedia from "./MovieCardMedia.vue";

defineProps<{
  movie: IMovie;
}>();
</script>
<template>
  <div class="card relative flex flex-col">
    <MovieCardMedia :movie="movie" />
    <MovieCardDescription :movie="movie" />
    <button
      type="button"
      class="card__bookmark absolute flex cursor-pointer stroke-white fill-white top-2 md:top-4 right-2 md:right-4 w-8 h-8 rounded-full bg-blue-dark bg-opacity-50 hover:fill-blue-dark hover:stroke-blue-dark hover:bg-white hover:bg-opacity-100 transition-all duration-100"
    >
      <SvgIcon
        :name="movie.isBookmarked ? 'bookmark-full' : 'bookmark-empty'"
        class="w-3 h-3 m-auto"
      />
    </button>
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
  &__media {
    height: 110px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      height: 140px;
    }
    @media (min-width: 1024px) {
      height: 174px;
    }
    .is-trending & {
      height: 140px;
      @media (min-width: 768px) {
        height: 230px;
      }
    }
  }
  &__bookmark {
    .is-trending & {
      @media (min-width: 768px) {
        top: 16px;
        right: 24px;
      }
    }
  }
}
</style>
