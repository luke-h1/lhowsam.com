import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('about', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/about`);
  });

  test('should render correctly', async () => {
    await expect(page.locator("[data-testid='AboutPage-intro']")).toBeVisible();
    await expect(page.locator('text=Experience')).toBeVisible();
  });
});
