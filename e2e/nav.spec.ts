import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('nav', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should navigate correctly without errors', async () => {
    await expect(page.locator('[data-testid="main-nav"]')).toBeVisible();
    expect(page.url()).toContain('/');

    // 1st link (about)
    await expect(page.locator('text=About').first()).toBeVisible();
    await page.click('text=About');
    await expect(page.locator('h1').first()).toHaveText('About');

    await page.goBack();
    await expect(page.locator("text='Hey 👋, I'm Luke'")).toBeVisible();

    // 2nd link (projects)
    await expect(page.locator('text=Projects').first()).toBeVisible();
    await page.click('text=Projects');
    await expect(page.locator('text=Projects').first()).toBeVisible();
    await page.click('text=Projects');
    await expect(page.locator('h1').first()).toHaveText('Projects');

    // 3rd link (Blog)
    await expect(page.locator('text=Blog').first()).toBeVisible();
    await page.click('text=Blog');
    await expect(page.locator('h1').first()).toHaveText('Blog');
  });
});
