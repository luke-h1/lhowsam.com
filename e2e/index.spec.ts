/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { projectsWithSiteUrls } from './utils/projects';

let page: Page;

test.describe('index', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  test('should render intro correctly', async () => {
    await expect(
      page.locator('[data-testid="highlight-heading"]'),
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="highlight-description"]'),
    ).toBeVisible();
  });

  test('should display recent posts', async () => {
    await expect(page.getByText('Recent Posts')).toBeVisible();
    for (let i = 0; i < 3; i += 1) {
      await expect(
        page.locator('[data-testid="post-title"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-date"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid^="post-tag-"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-title"]').nth(i),
      ).not.toHaveText('');

      await expect(
        page.locator('[data-testid="post-date"]').nth(i),
      ).not.toHaveText('');

      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).not.toHaveText('');
    }
  });
  test('should display Highlighted projects', async () => {
    await expect(page.getByText('Highlighted Projects')).toBeVisible();

    for (let i = 0; i < 3; i += 1) {
      await expect(
        page.locator('[data-testid="project-image"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="project-title"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="project-title"]').nth(i),
      ).not.toBeEmpty();

      await expect(
        page.locator('[data-testid="project-intro"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="project-intro"]').nth(i),
      ).not.toBeEmpty();

      await expect(
        page.locator('[data-testid="project-github"]').nth(i),
      ).toBeVisible();

      const projectLinks = page.locator('[data-testid="project-link"]');
      if (projectsWithSiteUrls.includes(projectLinks[i])) {
        await expect(
          page.locator('[data-testid="project-siteUrl"]').nth(i),
        ).toBeVisible();
      }
    }
  });
});
