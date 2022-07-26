<script setup lang="ts">
import MainLayout from "@/components/layouts/mainLayout.vue";
import { RouterView } from "vue-router";
import NavigationBar from "./components/navigation/NavigationBar.vue";
</script>

<template>
  <MainLayout>
    <template #navbar>
      <NavigationBar />
    </template>
    <template #header></template>
    <template #page>
      <RouterView />
    </template>
  </MainLayout>
</template>
