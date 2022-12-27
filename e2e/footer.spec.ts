/* eslint-disable no-restricted-syntax */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('footer', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should navigate correctly without errors', async () => {
    const footer = await page.locator('[data-testid="footer"]');

    await expect(footer).toBeVisible();

    await expect(page.locator('[data-testid="footer-nav"]')).toBeVisible();

    const homeLink = page.locator('[data-testid="footer-nav"] >> text=Home');
    await expect(homeLink).toBeVisible();

    // blog
    const blogLink = page.locator('[data-testid="footer-nav"] >> text=Blog');
    await expect(blogLink).toBeVisible();
    await blogLink.click();
    await expect(page.locator('h1').first()).toHaveText('Blog');

    // about
    const aboutLink = page.locator('[data-testid="footer-nav"] >> text=About');
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await expect(page.locator('h1').first()).toHaveText('About');

    // projects
    const projectsLink = page.locator(
      '[data-testid="footer-nav"] >> text=Projects',
    );
    await expect(projectsLink).toBeVisible();
    await projectsLink.click();
    await expect(page.locator('h1').first()).toHaveText('Projects');
  });
});
