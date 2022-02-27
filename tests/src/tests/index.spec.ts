/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.URL}`);
});

test.describe('index page works', () => {
  test('it renders intro correctly', async ({ page }) => {
    await page.waitForSelector('h1');
    const title = await page.evaluate(el => el.textContent, await page.$('h1'));
    expect(title).toEqual("Hey 👋 I'm Luke");
  });

  test('it renders recent blogs', async ({ page }) => {
    for (let i = 0; i < 3; i += 1) {
      expect(
        await page.locator('data-testid=blog-title').allInnerTexts(),
      ).toStrictEqual([
        'My top 5 VSCode extensions',
        'Extending multiple classes in TypegraphQL',
        'Full stack deploy with Dokku',
      ]);
    }
  });
  test('it renders projects', async ({ page }) => {
    for (let i = 0; i < 3; i += 1) {
      expect(
        await page.locator('data-testid=project-intro').allInnerTexts(),
      ).not.toBeNull();
      expect(
        await page.locator('data-testid=github-url').allInnerTexts(),
      ).not.toBeNull();
      expect(
        await page.locator('data-testid=project-title').allInnerTexts(),
      ).not.toBeNull();
      expect(
        await page.locator('data-testid=project-title').allInnerTexts(),
      ).toStrictEqual(['Automation →', 'Storify →', 'My website →']);
    }
  });
});
