<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  name: string;
  color?: string;
  iconClasses?: string[] | string;
}>();

const symbolId = computed((): string => `#icon-${props.name}`);
</script>

<template>
  <svg aria-hidden="true" :class="iconClasses">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="postcss"></style>
