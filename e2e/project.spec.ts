/* eslint-disable no-await-in-loop */
import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('project', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/projects`);
    await expect(page.getByTestId('page-title')).toHaveText('Projects');
    await expect(page.getByTestId('page-hero-description')).toHaveText(
      'Open source apps',
    );
  });

  test('shows project posts & project slug pages correctly', async () => {
    const cards = page.getByTestId('project-card');
    const count = await cards.count();

    for (let i = 0; i < count; i += 1) {
      const card = cards.nth(i);
      const titleLink = card.getByTestId('project-card-title');
      await expect(titleLink).toBeVisible();
      await expect(card.getByTestId('project-card-description')).not.toBeEmpty();

      const href = await titleLink.getAttribute('href');
      expect(href).toBeTruthy();
      await page.goto(`${baseUrl}${href}`);

      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-title')).not.toBeEmpty();

      await expect(page.getByTestId('project-page-github-link')).toBeVisible();

      await page.goto(`${baseUrl}/projects`);
    }
  });
});
