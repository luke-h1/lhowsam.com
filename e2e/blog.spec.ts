/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('blog', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/blog`);
    await expect(page.locator('h1').first()).toHaveText('Blog');
  });

  test('shows a listing of blog posts & slug page correctly', async () => {
    const links: string[] = [];

    const posts = await page.$$('data-testid=post-link');

    for (let i = 0; i < posts.length; i += 1) {
      await expect(page.locator('h2').nth(i)).toBeVisible();
      await expect(page.locator('h2').nth(i)).not.toBeEmpty();

      await expect(page.locator('p').nth(i)).toBeVisible();
      await expect(page.locator('p').nth(i)).not.toBeEmpty();

      const link = await page
        .locator('[data-testid="post-link"]')
        .nth(i)
        .getAttribute('href');

      links.push(`${baseUrl}${link}`);

      await page.goto(links[i]);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).not.toBeEmpty();

      await expect(page.locator('img').first()).toBeVisible();
      await expect(page.locator('article').first()).toBeVisible();

      await expect(
        page.locator('[data-testid="recommended-post-title"]'),
      ).toBeVisible();
      await expect(
        page.locator('[data-testid="recommended-post-title"]'),
      ).not.toBeEmpty();

      await page.goto(`${baseUrl}/blog`);

      await expect(page.locator('h1').first()).toHaveText('Blog');
    }
  });
});
