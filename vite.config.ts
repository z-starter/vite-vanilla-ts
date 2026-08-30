import { defineConfig } from "vitest/config"
import swc from "@o.z/vite-plugin-swc"

export default defineConfig({
  plugins: [swc()],
  test: {
    reporters: ["verbose"],
    globals: true,
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/lib/**/*.ts"],
    },
  },
})
