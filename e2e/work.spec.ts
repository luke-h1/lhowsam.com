/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('work', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/work`);
    await expect(page.locator('h1').first()).toHaveText('Work');
  });

  test('renders index & slug pages correctly', async () => {
    const links: string[] = [];

    const workItems = await page.locator('[data-testid="work-title"]').all();

    for (let i = 0; i < workItems.length; i += 1) {
      await expect(
        page.locator('[data-testid="work-title"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="work-intro"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="work-intro"]').nth(i),
      ).not.toBeEmpty();

      const link = await page
        .locator('[data-testid="work-title"]')
        .nth(i)
        .locator('..')
        .getAttribute('href');

      links.push(`${baseUrl}${link}`);

      await page.goto(links[i]);

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).not.toBeEmpty();

      const timeElement = page.locator('[data-testid="time"]');
      if (await timeElement.isVisible()) {
        await expect(timeElement).toBeVisible();
      }

      await expect(page.locator('[data-testid="content"]')).toBeVisible();
      await expect(page.locator('[data-testid="content"]')).not.toBeEmpty();

      const metaTitles = page.locator('[data-testid^="meta-title-"]');
      const metaDescriptions = page.locator(
        '[data-testid^="meta-description-"]',
      );

      if ((await metaTitles.count()) > 0) {
        await expect(metaTitles.first()).toBeVisible();
      }

      if ((await metaDescriptions.count()) > 0) {
        await expect(metaDescriptions.first()).toBeVisible();
      }

      await page.goto(`${baseUrl}/work`);
      await expect(page.locator('h1').first()).toHaveText('Work');
    }
  });
});
