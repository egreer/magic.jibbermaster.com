import react from "@vitejs/plugin-react";
import * as child from "child_process";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const commitHash = child.execSync("git rev-parse --short HEAD").toString();

export default ({ mode }) => {
  return defineConfig({
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
      "process.env.COMMIT_HASH": JSON.stringify(commitHash),
    },
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      VitePWA({
        injectRegister: "auto",
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg}"],
        },
        manifest: false,
      }),
    ],
    server: {
      port: 3000,
    },
  });
};
