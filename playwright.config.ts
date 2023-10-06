import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10_000,
    toHaveScreenshot: { maxDiffPixels: 100 },
  },
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.24mx.ie',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [    {
    name: 'Google Chrome',
    grep: /@desktop/,
    use: {
      viewport: {
        width: 1920,
        height: 1440,
      },
      channel: 'chrome',
    },
  },
  /* Test against mobile viewports. */
  {
    name: 'Mobile Chrome',
    grep: /@mobile/,
    use: {
      userAgent:
        'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.29 Mobile Safari/537.36',
      viewport: {
        width: 393,
        height: 1440,
      },
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      channel: 'chrome',
    },
  },
  {
    name: 'api',
    testDir: './tests/api/',
    fullyParallel: false,
    retries: 1,
    timeout: 300_000,
  },
  ],
});
