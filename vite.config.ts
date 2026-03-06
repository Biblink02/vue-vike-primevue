import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
  plugins: [
    vike(),
    tailwindcss(),
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@assets": "/assets",
      "@components": "/components",
      "@pages": "/pages",
      "@utils": "/utils",
      "@types": "/types",
      "@api": "/api",
      "@stores": "/stores",
    },
  },
  test: {
    environment: "happy-dom",
    globals: true,
  },
});
