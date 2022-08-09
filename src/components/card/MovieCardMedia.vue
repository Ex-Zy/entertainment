<script setup lang="ts">
import type IPosterRegular from "@/types/poster.regular.js";
import type IPosterTrending from "@/types/poster.trending.js";
import PosterRegular from "./poster/PosterRegular.vue";
import PosterTranding from "./poster/PosterTranding.vue";
import PlayButton from "./buttons/PlayButton.vue";
import BookmarkButton from "./buttons/BookmarkButton.vue";

defineProps<{
  posterRegular: IPosterRegular;
  posterTranding: IPosterTrending;
  isTrending: boolean;
  isBookmarked: boolean;
  title: string;
}>();
</script>
<template>
  <div class="card relative flex flex-col">
    <div class="card__media rounded-lg overflow-hidden relative">
      <PosterTranding
        v-if="isTrending"
        :title="title"
        :poster="posterTranding"
      />
      <PosterRegular v-else :title="title" :poster="posterRegular" />
      <BookmarkButton :isBookmarked="isBookmarked" />
      <PlayButton />
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
      .play-button {
        opacity: 1;
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
