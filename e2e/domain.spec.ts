import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const domainsWithwwwRedirect = [
  'https://lhowsam.com',
  'https://dev.lhowsam.com',
];

test.describe('domains', () => {
  test.skip(
    !domainsWithwwwRedirect.includes(baseUrl),
    `www redirect check only for production base URL (current: ${baseUrl})`,
  );

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('vercel redirects www to non-www', async () => {
    expect(page.url()).not.toContain('www');
    const wwwUrl = baseUrl.replace('https://', 'https://www.');
    await page.goto(wwwUrl, { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(new RegExp(`^${escapeRegExp(baseUrl)}/?$`));
  });
});
