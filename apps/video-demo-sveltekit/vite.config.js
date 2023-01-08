import { sveltekit } from "@sveltejs/kit/vite";
import WindiCSS from "vite-plugin-windicss";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), WindiCSS()],
  optimizeDeps: {
    include: ["sanity", "sanity/desk"],
  },
};

export default config;
