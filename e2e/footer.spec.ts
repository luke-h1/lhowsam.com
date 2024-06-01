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

  test('has correct links', async () => {
    await expect(page.locator('[data-testid="footer"]')).toBeVisible();

    // github
    await expect(
      page.locator('[data-testid="footer"] >> text="Github"'),
    ).toBeVisible();

    // LinkedIn
    await expect(
      page.locator('[data-testid="footer"] >> text="Linkedin"'),
    ).toBeVisible();

    // Email
    await expect(
      page.locator('[data-testid="footer"] >> text="Email"'),
    ).toBeVisible();
  });

  test('theme switcher switches theme correctly', async () => {
    // light
    await page.selectOption('[id="theme-select"]', { label: 'Light' });
    await expect(page.locator('html')).toHaveAttribute('class', 'light');

    // dark
    await page.selectOption('[id="theme-select"]', { label: 'Dark' });
    await expect(page.locator('html')).toHaveAttribute('class', 'dark');

    // system
    await page.click('[id="theme-select"]');
    await page.selectOption('[id="theme-select"]', { label: 'System' });
    await expect(page.locator('html')).toHaveAttribute('class', 'light');
  });
});
