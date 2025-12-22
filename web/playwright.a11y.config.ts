import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/a11y",
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  projects: [
    {
      name: "chromium-a11y",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run preview",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
