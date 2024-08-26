import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

const domainsWithwwwRedirect = [
  'https://lhowsam.com',
  'https://dev.lhowsam.com',
];

test.describe('domains', () => {
  if (!domainsWithwwwRedirect.includes(baseUrl)) {
    test.skip();
  }

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('vercel redirects www to non-www', async () => {
    expect(page.url()).not.toContain('www');
    const wwwUrl = baseUrl.replace('https://', 'https://www.');
    await page.goto(wwwUrl);
    await page.waitForLoadState('networkidle');
    expect(page.url()).not.toContain('www');
  });
});
