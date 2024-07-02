import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('domains', () => {
  test.beforeAll(async ({ browser }) => {
    if (
      baseUrl === 'https://lhowsam.com' ||
      baseUrl === 'https://dev.lhowsam.com'
    ) {
      page = await browser.newPage();
      await page.goto(`${baseUrl}`);
    } else {
      test.skip();
    }
  });

  test('vercel redirects www to non-www', async () => {
    expect(page.url()).not.toContain('www');
    const wwwUrl = baseUrl.replace('https://', 'https://www.');
    await page.goto(wwwUrl);
    await page.waitForLoadState('networkidle');
    expect(page.url()).not.toContain('www');
  });
});
