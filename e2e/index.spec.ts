/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('index', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should render correctly', async () => {
    await expect(page.locator("text='Hey 👋, I'm Luke'")).toBeVisible();

    await expect(page.locator("text='I'm a Software Engineer'")).toBeVisible();
  });

  test('should display posts', async () => {
    for (let i = 0; i < 3; i += 1) {
      await expect(
        page.locator('[data-testid="post-title"]').nth(i),
      ).toBeVisible();
      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).toBeVisible();
      await expect(
        page.locator('[data-testid="post-tags"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-title"]').nth(i),
      ).not.toHaveText('');
      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).not.toHaveText('');
      await expect(
        page.locator('[data-testid="post-tags"]').nth(i),
      ).not.toHaveText('');
    }
  });
});
