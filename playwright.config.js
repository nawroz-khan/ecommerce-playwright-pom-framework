// @ts-check
const isCI = !!process.env.CI;

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  retries: 1,
  timeout: 60_000,
  expect: {
    timeout: 15_000,
  },
  reporter: 'html',
  use: {
    // ubuntu-latest has no display, so CI must run headless.
    headless: isCI,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    // Microsoft Edge is installed locally. ubuntu-latest does not have the msedge channel.
    ...(!isCI
      ? [
          {
            name: 'edge',
            use: {
              browserName: 'chromium',
              channel: 'msedge',
            },
          },
        ]
      : []),
    {
      name: 'safari',
      use: { browserName: 'webkit' },
    },
  ],
};

// One worker on CI so the shared store login is not invalidated by parallel browsers.
if (isCI) {
  config.workers = 1;
}

module.exports = config;
