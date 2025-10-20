import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  esbuild: {
    // strip dev-only statements without switching to terser
    drop: ["console", "debugger"],
  },
  build: {
    // keep esbuild minifier (fast) and split big vendors
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react") || id.includes("scheduler")) {
            return "vendor-react";
          }
          if (id.includes("firebase")) {
            // splits firebase/app, auth, firestore into one vendor chunk
            return "vendor-firebase";
          }
          if (id.includes("@stripe")) {
            return "vendor-stripe";
          }
          // let Rollup auto-split the rest
        },
      },
    },
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000, // optional: silence warning after splitting
  },
});
