<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  layout: "horizontal" | "vertical";
}>();

const classes = computed(() =>
  props.layout === "horizontal"
    ? "flex gap-4 md:gap-9 overflow-auto"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-[20px] md:gap-x-7 lg:gap-y-[32px] lg:gap-x-10"
);
</script>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>
