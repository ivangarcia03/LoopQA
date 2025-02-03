const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000, // Timeout for each test (in milliseconds)
  retries: 1, // Number of retries for failed tests
  use: {
    headless: true, // Run tests in headless mode
    baseURL: 'https://example.com', // Optional: Set a base URL for tests
    viewport: { width: 1280, height: 720 }, // Default viewport size
    screenshot: 'only-on-failure', // Take screenshots on failure
    video: 'retain-on-failure', // Record videos for failed tests
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
});
