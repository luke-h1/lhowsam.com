/* eslint-disable no-await-in-loop */
import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('blog', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/blog`);
    await expect(page.getByTestId('page-title')).toHaveText('Blog');
  });

  test('renders index & slug pages correctly', async () => {
    const postList = page.getByTestId('blog-post-list');
    const cards = postList.getByTestId('blog-post-card');
    const count = await cards.count();

    for (let i = 0; i < count; i += 1) {
      const card = cards.nth(i);
      const titleLink = card.getByTestId('blog-post-card-title');
      await expect(titleLink).toBeVisible();

      const intro = card.getByTestId('blog-post-card-intro');
      await expect(intro).toBeVisible();
      await expect(intro).not.toBeEmpty();

      const link = await titleLink.getAttribute('href');
      expect(link).toBeTruthy();
      await page.goto(`${baseUrl}${link}`);

      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-title')).not.toBeEmpty();

      await expect(page.getByTestId('article-published-at')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
      await expect(page.getByTestId('article-body')).not.toBeEmpty();

      await page.goto(`${baseUrl}/blog`);
      await expect(page.getByTestId('page-title')).toHaveText('Blog');
    }
  });

  // Legacy ~/lhowsam.com blog search + ?title= URL sync — not implemented on Astro blog index.
  test.describe.skip('search', () => {});
});
