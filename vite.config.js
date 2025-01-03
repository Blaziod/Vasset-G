import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify the development server port here
  },
  build: {
    outDir: "dist", // Specify the output directory
  },
  // Handle SPA fallback for React Router
  resolve: {
    alias: {}, // Add any path aliases if needed
  },
  preview: {
    port: 5000, // Port for the preview server
  },
  // Ensure Vite handles fallback to index.html
  optimizeDeps: {
    include: [],
  },
});
