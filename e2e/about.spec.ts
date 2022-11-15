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

    await expect(page.locator('img')).toBeVisible();

    await expect(page.locator('h2').first()).toHaveText('Skills:');

    await expect(page.locator('text=resume')).toHaveAttribute(
      'href',
      '/static/cv-latest.pdf',
    );
  });
});