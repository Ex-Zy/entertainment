<script setup lang="ts">
import type IMovie from "@/types/movie";
import { computed } from "vue";

const props = defineProps<{
  movie: IMovie;
  mediumSize?: boolean;
}>();

const cardSizeClasses = computed(() =>
  props.mediumSize
    ? "grow-0 shrink-0 w-2/3 lg:w-5/12 h-[140px] md:h-[230px]"
    : "h-[110px] md:h-[140px] lg:h-[174px]"
);
const cardDescriptionClasses = computed(() =>
  props.mediumSize ? "bottom-4 left-4" : "top-full mt-2"
);
const categoryIconName = computed(() => {
  const name = props.movie.category;
  const transformedName = name.split(" ").join("-").toLocaleLowerCase();

  return `category-${transformedName}`;
});
</script>
<template>
  <figure
    class="relative flex p-6 bg-center bg-no-repeat bg-cover rounded-lg"
    :class="cardSizeClasses"
    :style="`background-image: url('${movie.thumbnail.regular.small}')`"
  >
    <figcaption :class="cardDescriptionClasses" class="absolute left-0 right-0">
      <ul class="flex gap-2 text-sm items-center opacity-75">
        <li>{{ movie.year }}</li>
        <li class="flex gap-2 items-center text-[11px]">
          <SvgIcon :name="categoryIconName" class="w-3 h-3" />
          {{ movie.category }}
        </li>
        <li>{{ movie.rating }}</li>
      </ul>
      <div class="font-medium text-[14px]">{{ movie.title }}</div>
    </figcaption>
  </figure>
</template>
