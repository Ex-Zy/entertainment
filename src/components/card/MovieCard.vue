<script setup lang="ts">
import type IMovie from "@/types/movie";
import MovieCardDescription from "./MovieCardDescription.vue";
import MovieCardMedia from "./MovieCardMedia.vue";
import { computed } from "vue";
import { useMoviesStore } from "@/stores/movies.store";

const store = useMoviesStore();
const { setBookmarkMovie } = store;

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
      :isBookmarked="movie.isBookmarked"
      :title="movie.title"
      :posterRegular="movie.thumbnail.regular"
      :posterTranding="movie.thumbnail.trending"
      @update:bookmark="setBookmarkMovie(movie.id, !movie.isBookmarked)"
    />
    <MovieCardDescription
      :year="movie.year"
      :category="movie.category"
      :rating="movie.rating"
      :title="movie.title"
      :iconName="iconName"
    />
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
