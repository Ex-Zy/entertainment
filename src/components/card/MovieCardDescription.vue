<script setup lang="ts">
import type IMovie from "@/types/movie";
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
  <div class="card__description">
    <ul
      class="flex gap-2 text-[11px] md:text-[13px] font-light items-center opacity-75"
    >
      <li>{{ movie.year }}</li>
      <li class="flex gap-2 items-center">
        <SvgIcon :name="iconName" class="w-3 h-3" />
        {{ movie.category }}
      </li>
      <li>{{ movie.rating }}</li>
    </ul>
    <div class="card__title font-medium text-[14px] md:text-[18px]">
      {{ movie.title }}
    </div>
  </div>
</template>

<style lang="scss">
.card {
  &__description {
    margin: 8px 0 0;
    .is-trending & {
      position: absolute;
      left: 16px;
      bottom: 12px;
      z-index: 1;
      @media (min-width: 768px) {
        left: 26px;
        bottom: 24px;
      }
    }
  }
}
</style>
