import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcss from "./postcss.config.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), postcss],
});
