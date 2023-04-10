import { defineConfig } from "cypress";

const url = "http://localhost:3000";

export default defineConfig({
  env: {
    apiUrl: "https://jsonplaceholder.typicode.com/posts",
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: url,
  },
});
