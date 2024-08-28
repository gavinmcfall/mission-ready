import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Sets the environment to jsdom for testing react components
    setupFiles: "./setupTests.ts", // Optional setup file for global test setup
  },
});
