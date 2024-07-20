/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { projectsWithSiteUrls } from './utils/projects';

let page: Page;

test.describe('project', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/projects`);
    await expect(page.locator('h1').first()).toHaveText('Projects');
    await expect(page.locator('p').first()).toHaveText('Personal projects');
  });

  test('shows project posts & project slug pages correctly', async () => {
    const links: string[] = [];

    const projects = await page.$$('data-testid=project-link');

    for (let i = 0; i < projects.length; i += 1) {
      await expect(
        page.locator('[data-testid="project-title"]').nth(i),
      ).toBeVisible();
      await expect(page.locator('p').nth(i)).not.toBeEmpty();

      const link = await page
        .locator('[data-testid="project-link"]')
        .nth(i)
        .getAttribute('href');

      links.push(`${baseUrl}${link}`);

      await page.goto(links[i]);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).not.toBeEmpty();

      const projectsIncludingSiteUrls = links.filter(
        l => projectsWithSiteUrls.indexOf(l) > -1,
      );

      if (projectsIncludingSiteUrls.length > 0) {
        await expect(
          page.locator('[data-testid="project-siteUrl"]'),
        ).toBeVisible();
      }

      // GitHub
      await expect(page.getByTestId('meta-title-2')).toContainText(
        'Repository',
      );
      await expect(page.getByTestId('meta-description-2')).toBeVisible();

      await page.goto(`${baseUrl}/projects`);
    }
  });
});
