import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

const ASPNETCORE_API_URL = "http://localhost:5187";

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    proxy: {
      "/api": ASPNETCORE_API_URL,
      "/r": {
        target: ASPNETCORE_API_URL,
        ws: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../Pollio.Web/wwwroot"),
  },
});
