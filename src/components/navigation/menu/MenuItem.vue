<script setup lang="ts">
import { RouterLink } from "vue-router";
import SvgIcon from "../../SvgIcon.vue";
defineProps<{
  iconName: string;
  to: string;
}>();
</script>

<template>
  <RouterLink
    :to="to"
    active-class="!fill-white"
    class="fill-blue-light p-3 md:p-4 lg:p-5 hover:fill-white transition duration-0 hover:duration-150"
  >
    <SvgIcon :name="iconName" :iconClasses="['w-4 h-4 md:w-5 md:h-5']" />
  </RouterLink>
</template>
