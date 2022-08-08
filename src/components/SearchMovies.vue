<script setup lang="ts">
import { ref } from "vue";

const value = ref("");

const emit = defineEmits<{
  (e: "search", value: string): void;
}>();
const handleInput = (e: Event) =>
  emit("search", (e.target as HTMLInputElement).value);
</script>

<template>
  <form @submit.prevent class="mb-2">
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-6 h-6 md:w-8 md:h-8 stroke-white"
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
        class="block bg-blue-dark text-[1rem] opacity-50 focus:opacity-100 focus:placeholder:text-white p-4 md:pl-14 pl-10 w-full text-sm md:text-xl text-white outline-none"
        placeholder="Search for movies or TV series"
        :value="value"
        @input="handleInput"
      />
    </div>
  </form>
</template>
