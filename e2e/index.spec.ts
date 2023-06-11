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
    await expect(
      page.locator("text='Luke // Software Engineer'"),
    ).toBeVisible();

    await expect(page.locator("text='Highlighted projects'")).toBeVisible();
  });

  test('should display posts', async () => {
    for (let i = 0; i < 3; i += 1) {
      await expect(
        page.locator('[data-testid="project-title"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="project-intro"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="project-title"]').nth(i),
      ).not.toHaveText('');

      await expect(
        page.locator('[data-testid="project-intro"]').nth(i),
      ).not.toHaveText('');
    }
  });
});
