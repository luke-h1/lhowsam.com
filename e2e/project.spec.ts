/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('project', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/projects`);
    await expect(page.locator('h1').first()).toHaveText('Projects');
  });

  test('shows project posts & project slug pages correctly', async () => {
    const links: string[] = [];

    const projects = await page.$$('data-testid=project-link');

    for (let i = 0; i < projects.length; i += 1) {
      await expect(
        page.locator('[data-testid="project-title"]').nth(i),
      ).toBeVisible();
      await expect(page.locator('p').nth(i)).not.toBeEmpty();

      await expect(
        page.locator('[data-testid="github"]').nth(i),
      ).not.toBeEmpty();

      const link = await page
        .locator('[data-testid="project-link"]')
        .nth(i)
        .getAttribute('href');

      links.push(`${baseUrl}${link}`);

      await page.goto(links[i]);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).not.toBeEmpty();

      await page.goto(`${baseUrl}/projects`);
    }
  });
});
