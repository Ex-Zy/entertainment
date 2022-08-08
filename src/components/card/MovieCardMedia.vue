<script setup lang="ts">
import type IMovie from "@/types/movie";

defineProps<{
  movie: IMovie;
}>();
</script>
<template>
  <div class="card relative flex flex-col">
    <div class="card__media rounded-lg overflow-hidden relative">
      <!--Trending picture-->
      <template v-if="movie.isTrending">
        <picture>
          <source
            media="(min-width: 768px)"
            :srcset="movie.thumbnail.trending.large"
          />
          <img
            :src="movie.thumbnail.trending.small"
            :alt="`Poster ${movie.title}`"
          />
        </picture>
      </template>
      <!--Base picture-->
      <template v-else>
        <picture>
          <source
            media="(min-width: 768px)"
            :srcset="movie.thumbnail.regular.medium"
          />
          <source
            media="(min-width: 1024px)"
            :srcset="movie.thumbnail.regular.large"
          />
          <img
            :src="movie.thumbnail.regular.small"
            :alt="`Poster ${movie.title}`"
          />
        </picture>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  &__media {
    height: 110px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0;
      transition: opacity 0.2s;
    }
    &:hover {
      &::after {
        opacity: 0.5;
      }
    }
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
}
</style>
