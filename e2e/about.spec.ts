import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('about', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/about`);
  });

  test('should render correctly', async () => {
    await expect(page.locator('h1').first()).toHaveText('About');

    await expect(
      page.locator(
        "text=Hey I'm Luke, a Software Engineer currently based in the UK.",
      ),
    ).toBeVisible();

    await expect(page.locator('text=Skills')).toBeVisible();
  });
});
