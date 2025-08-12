import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/ui/ui-tests",
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: 2,
  reporter: [["html"], ["allure-playwright"]],
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
