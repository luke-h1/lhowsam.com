/* eslint-disable no-restricted-syntax */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('footer', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);

    // scroll to footer
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  });

  test('should navigate correctly without errors', async () => {
    await expect(page.locator('[data-testid="footer"]')).toBeVisible();

    // blog
    await page.click('[data-testid="footer"] >> text="Blog"');
    await expect(page.locator('h1').first()).toHaveText('Blog');
    await page.goBack();

    // about
    await page.click('[data-testid="footer"] >> text="About"');
    await expect(page.locator('h1').first()).toHaveText('About');
    await page.goBack();

    // projects
    await page.click('[data-testid="footer"] >> text="Projects"');
    await expect(page.locator('h1').first()).toHaveText('Projects');
    await page.goBack();
  });
});
