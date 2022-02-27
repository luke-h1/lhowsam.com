/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.URL}/projects`);
});

test.describe('project page works', () => {
  test('it renders project posts', async ({ page }) => {
    expect(await (await page.waitForSelector('h1')).innerText()).toBe(
      'Projects',
    );

    expect(await (await page.locator('h2')).allInnerTexts()).toStrictEqual([
      'Automation',
      'Storify',
      'My website',
    ]);
  });

  test('it renders slug page correctly', async ({ page }) => {
    await (await page.waitForSelector('//h2[text()="Storify"]')).click();
    await page
      .waitForNavigation({ waitUntil: 'networkidle' })
      .catch(e => console.error(e));

    expect(
      await await page.locator('data-testid=project-title').innerText(),
    ).toBe('Storify');

    await page.locator('article').scrollIntoViewIfNeeded();

    await expect(page.locator('article').innerHTML()).not.toBeNull();

    await expect(
      await page.locator('data-testid=tech').first().innerText(),
    ).toBe('GraphQL');
  });
});
