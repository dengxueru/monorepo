import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.json",
      include: ["packages/components/**/*"],
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
          grid: true,
        }),
      ],
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "./packages/components/index.ts"),
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "dist/es",
          exports: "named",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "dist/cjs",
          exports: "named",
        },
      ],
    },
  },
});
