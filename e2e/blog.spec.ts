/* eslint-disable no-await-in-loop */
import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('blog', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/blog`);
    await expect(page.locator('h1').first()).toHaveText('Blog');
  });

  test('renders index & slug pages correctly', async () => {
    const links: string[] = [];

    const posts = await page.$$('data-testid=post-title');

    for (let i = 0; i < posts.length; i += 1) {
      await expect(page.locator('a').nth(i)).toBeVisible();

      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="post-intro"]').nth(i),
      ).not.toBeEmpty();

      const link = await page
        .locator('[data-testid="post-title"]')
        .nth(i)
        .getAttribute('href');

      links.push(`${baseUrl}${link}`);

      await page.goto(links[i]);

      // slug
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).not.toBeEmpty();

      await expect(page.locator('[data-testid="time"]')).toBeVisible();

      await expect(page.locator('[data-testid="content"]')).toBeVisible();
      await expect(page.locator('[data-testid="content"]')).not.toBeEmpty();

      await expect(page.locator('[data-testid="meta-title-1"]')).toBeVisible();
      await expect(page.locator('[data-testid="meta-title-2"]')).toBeVisible();

      await expect(
        page.locator('[data-testid="meta-description-1"]'),
      ).toBeVisible();

      await expect(
        page.locator('[data-testid="meta-description-2"]'),
      ).toBeVisible();

      await page.goto(`${baseUrl}/blog`);
      await expect(page.locator('h1').first()).toHaveText('Blog');
    }
  });

  test.describe('search', async () => {
    test('searches correctly', async () => {
      const input = page.getByRole('textbox');

      await input.fill('Vault');

      const title = page.locator('[data-testid="post-title"]', {
        hasText: 'Getting started with aws-vault',
      });

      await expect(title).toHaveText('Getting started with aws-vault');

      const otherBlogPost = page.locator('[data-testid="post-title"]', {
        hasText: 'Code linters and formatters',
      });

      await expect(otherBlogPost).not.toBeVisible();

      await expect(page).toHaveURL(`${baseUrl}/blog?title=Vault`);
    });

    test('searches correctly via visting URL param', async () => {
      await page.goto(`${baseUrl}/blog?title=playwright`);
      const input = page.getByRole('textbox');

      await expect(input).toHaveValue('playwright');

      const playwrightBlogPost = page.locator('[data-testid="post-title"]', {
        hasText: 'Getting started with Playwright UI testing',
      });

      await expect(playwrightBlogPost).toBeVisible();

      const otherBlogPost = page.locator('[data-testid="post-title"]', {
        hasText: 'Code linters and formatters',
      });
      await expect(otherBlogPost).not.toBeVisible();
    });
  });
});
