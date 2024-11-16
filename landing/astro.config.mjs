// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/app": "//app.pmsky.social",
    "/bsky": "//bsky.app/profile/pmsky.social",
  },
});
