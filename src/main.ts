import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.postcss";
import "virtual:svg-icons-register";

import SvgIcon from "./components/SvgIcon.vue";
import SearchMovies from "./components/SearchMovies.vue";

const app = createApp(App);

app.component("SvgIcon", SvgIcon);
app.component("SearchMovies", SearchMovies);
app.use(createPinia());
app.use(router);

app.mount("#app");
