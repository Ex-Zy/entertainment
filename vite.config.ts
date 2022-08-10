import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vue from "@vitejs/plugin-vue";

const isProduction = () => process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  // Specifying "base" option is required for Github Pages
  base: isProduction() ? "/entertainment/" : "/",
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL("./src/assets/icons", import.meta.url))],
      symbolId: "[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@navigation": fileURLToPath(
        new URL("./src/navigation", import.meta.url)
      ),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
