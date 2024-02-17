import { defineConfig } from "vite";

export default defineConfig({
  test: {
    dir: "tests",
    globals: true,
    coverage: {
      provider: "istanbul"
    }
  }
});