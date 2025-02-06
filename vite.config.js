import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: {
      origin: "https://vassetapp.com",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow only needed methods
      credentials: true, // Allow cookies/auth headers if needed
    },
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {},
  },
  preview: {
    port: 5000,
  },
  optimizeDeps: {
    include: [],
  },
});
