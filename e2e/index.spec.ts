/* eslint-disable no-await-in-loop */
import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('index', () => {
  test.describe.configure({ mode: 'serial' });

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should render intro correctly', async () => {
    await expect(page.getByTestId('home-page-title')).toBeVisible();
    await expect(page.getByTestId('home-author-name')).toBeVisible();
    await expect(page.getByTestId('home-intro')).toBeVisible();
    await expect(page.getByTestId('home-intro')).toHaveText(
      'SWE interested in React Native, Mobile, DevOps, TypeScript and all things in-between',
    );
  });

  test('should display recent posts', async () => {
    await expect(page.getByTestId('home-recent-posts-heading')).toBeVisible();

    const recentSection = page.getByTestId('home-recent-posts');
    const articles = recentSection.getByTestId('home-recent-post-card');

    for (let i = 0; i < 3; i += 1) {
      const article = articles.nth(i);
      await expect(article.getByTestId('home-recent-post-title')).toBeVisible();
      await expect(article.getByTestId('home-recent-post-date')).toBeVisible();
      await expect(article.getByTestId('home-recent-post-intro')).toBeVisible();
      await expect(article.getByTestId('home-recent-post-title')).not.toHaveText(
        '',
      );
      await expect(article.getByTestId('home-recent-post-date')).not.toHaveText(
        '',
      );
      await expect(article.getByTestId('home-recent-post-intro')).not.toHaveText(
        '',
      );
    }
  });
});
