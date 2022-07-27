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
    <template #header>
      <form @submit.prevent>
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 stroke-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block bg-blue-dark text-[1rem] opacity-50 focus:opacity-100 focus:placeholder:text-white p-4 pl-10 w-full text-sm text-white outline-none"
            placeholder="Search for movies or TV series"
          />
        </div>
      </form>
    </template>
    <template #page>
      <RouterView />
    </template>
  </MainLayout>
</template>
