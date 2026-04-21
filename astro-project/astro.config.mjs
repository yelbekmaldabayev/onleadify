// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://onleadify.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  server: {
    host: "0.0.0.0",
    port: 4321,
    allowedHosts: [
      "onleadify-4wpuq.ondigitalocean.app",
      "onleadify.com",
      "www.onleadify.com",
      "localhost",
      "127.0.0.1",
    ],
  },
  vite: {
    preview: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: [
        "onleadify-4wpuq.ondigitalocean.app",
        "onleadify.com",
        "localhost",
        "127.0.0.1",
      ],
    },
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
