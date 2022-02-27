import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.URL}/blog`);
});

test.describe('blog page works', () => {
  test('shows blog posts', async ({ page }) => {
    expect(await page.locator('h1').innerText()).toStrictEqual('Blog');

    expect(await page.locator('h2').allInnerTexts()).toStrictEqual([
      'My top 5 VSCode extensions',
      'Extending multiple classes in TypegraphQL',
      'Full stack deploy with Dokku',
      'Next.js SSR notes',
      'Forcing git merges',
      'First blog post',
    ]);
  });

  test('shows slug page correctly', async ({ page }) => {
    const gitPost = await page.locator('//h2[text()="Forcing git merges"]');
    await gitPost.click();
    await page.waitForNavigation();

    expect(await page.locator('h1').innerText()).toBe('Forcing git merges');

    await page.locator('article').scrollIntoViewIfNeeded();

    await expect(page.locator('article').innerHTML()).not.toBeNull();
  });
});
