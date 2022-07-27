import BookmarksPage from "@/components/pages/BookmarksPage.vue";
import MoviesPage from "@/components/pages/MoviesPage.vue";
import SeriesPage from "@/components/pages/SeriesPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/movies",
      component: MoviesPage,
    },
    {
      path: "/tv-series",
      component: SeriesPage,
    },
    {
      path: "/bookmarks",
      component: BookmarksPage,
    },
  ],
});

export default router;
