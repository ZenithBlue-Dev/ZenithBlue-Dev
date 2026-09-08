import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// GitHub org profile repo: ZenithBlue-dev.github.io
// Served from the domain root, so no `base` subpath. All in-page asset
// URLs are relative (no leading slash). `dist/` uploads to Pages as-is.
export default defineConfig({
  site: "https://zenithblue-dev.github.io",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
