/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('index', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should render intro correctly', async () => {
    await expect(page.locator('[data-testid="intro-heading"]')).toBeVisible();
    await expect(page.locator('[data-testid="view-experience"]')).toBeVisible();
    await expect(page.locator('[data-testid="read-cv"]')).toBeVisible();
  });

  test('should display recent posts', async () => {
    await expect(page.getByText('Recent Posts')).toBeVisible();
    for (let i = 0; i < 3; i += 1) {
      await expect(
        page.locator('[data-testid="post-title"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-date"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid^="post-tag-"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-title"]').nth(i),
      ).not.toHaveText('');

      await expect(
        page.locator('[data-testid="post-date"]').nth(i),
      ).not.toHaveText('');

      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).not.toHaveText('');
    }
  });
});
