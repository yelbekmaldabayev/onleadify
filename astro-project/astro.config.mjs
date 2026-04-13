// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  vite: {
    preview: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: [
        "onleadify-4wpuq.ondigitalocean.app",
        "localhost",
        "127.0.0.1",
      ],
    },
  },
  integrations: [react(), tailwind()],
});
