<script setup lang="ts">
defineProps<{
  isBookmarked: boolean;
}>();
</script>
<template>
  <button
    type="button"
    class="card__bookmark absolute z-10 flex cursor-pointer stroke-white fill-white top-2 md:top-4 right-2 md:right-4 w-8 h-8 rounded-full bg-blue-dark bg-opacity-50 hover:fill-blue-dark hover:stroke-blue-dark hover:bg-white hover:bg-opacity-100 transition-all duration-100"
  >
    <SvgIcon
      :name="isBookmarked ? 'bookmark-full' : 'bookmark-empty'"
      class="w-3 h-3 m-auto"
    />
  </button>
</template>

<style lang="scss">
.card {
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
