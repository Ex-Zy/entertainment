<script setup lang="ts">
defineProps<{
  year: number;
  category: string;
  rating: string;
  title: string;
  iconName: string;
}>();
</script>
<template>
  <div class="card__description">
    <ul
      class="flex gap-2 text-[11px] md:text-[13px] font-light items-center opacity-75"
    >
      <li>{{ year }}</li>
      <li class="flex gap-2 items-center">
        <SvgIcon :name="iconName" class="w-3 h-3" />
        {{ category }}
      </li>
      <li>{{ rating }}</li>
    </ul>
    <div class="card__title font-medium text-[14px] md:text-[18px]">
      {{ title }}
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
