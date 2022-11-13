import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('nav', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should navigate correctly without errors', async () => {
    await expect(page.locator('nav')).toBeVisible();
    expect(page.url()).toContain('/');

    // 1st link (about)
    await expect(page.locator('text=About').first()).toBeVisible();

    await page.click('text=About');
    await expect(page.locator('h1').first()).toHaveText('About');
    expect(page.url()).toContain('/about');

    await page.goBack();
    await expect(page.locator('span').first()).toHaveText("Hey 👋, I'm Luke");
    expect(page.url()).toContain('/');

    // 2nd link (projects)
    await expect(page.locator('text=Projects').first()).toBeVisible();
    await page.click('text=Projects');
    expect(page.url()).toContain('/projects');

    await expect(page.locator('h1').first()).toHaveText('Projects');
    await page.goBack();

    // 3rd link (Blog)
    await expect(page.locator('text=Blog').first()).toBeVisible();
    await page.click('text=Blog');
    await expect(page.locator('h1').first()).toHaveText('Blog');
    expect(page.url()).toContain('/blog');
  });
});
