import BookmarksPage from "@/components/pages/BookmarksPage.vue";
import MoviesPage from "@/components/pages/MoviesPage.vue";
import SeriesPage from "@/components/pages/SeriesPage.vue";
import TrendsPage from "@/components/pages/TrendsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: TrendsPage,
    },
    {
      path: "/movies",
      component: MoviesPage,
    },
    {
      path: "/series",
      component: SeriesPage,
    },
    {
      path: "/bookmarks",
      component: BookmarksPage,
    },
  ],
});

export default router;
