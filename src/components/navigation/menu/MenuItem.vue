<script setup lang="ts">
import { RouterLink } from "vue-router";
import SvgIcon from "../../SvgIcon.vue";
defineProps<{
  iconName: string;
  to: string;
  svgClasses?: string[] | string;
  iconClasses?: string[] | string;
}>();
</script>

<template>
  <RouterLink
    :to="to"
    active-class="fill-white"
    class="fill-blue-light hover:fill-white transition duration-0 hover:duration-150"
  >
    <SvgIcon
      :name="iconName"
      :svgClasses="svgClasses"
      :iconClasses="iconClasses"
    />
  </RouterLink>
</template>
