import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { sleep } from './utils/sleep';

let page: Page;

test.describe('kbar', () => {
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    await sleep(100);
  });

  test('should open kbar when clicking the command k button', async () => {
    await page.click('[data-testid="kbar-toggle"]');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();
    await page.keyboard.press('Escape');
  });

  test('should open kbar menu when pressing command + k', async () => {
    await page.click('body');
    await page.keyboard.down('Meta');
    await page.keyboard.press('KeyK');
    await page.keyboard.up('Meta');

    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();

    await page.keyboard.press('Escape');
  });

  test('should navigate to about page', async () => {
    // about
    await page.click('[data-testid="kbar-toggle"]');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await sleep(500);
    await expect(page.locator('xpath=//h1').first()).toHaveText('About');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).not.toBeVisible();

    await page.goto(baseUrl);
  });

  test('should navigate to blog page', async () => {
    // Blog
    await page.click('[data-testid="kbar-toggle"]');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await sleep(500);
    await page.keyboard.press('ArrowDown');
    await sleep(500);
    await page.keyboard.press('Enter');
    await sleep(500);
    await expect(page.locator('xpath=//h1').first()).toHaveText('Blog');

    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).not.toBeVisible();

    await page.goto(baseUrl);
  });

  test('should navigate to project page', async () => {
    // Projects
    await page.click('[data-testid="kbar-toggle"]');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();

    await page.keyboard.press('ArrowDown');
    await sleep(500);
    await page.keyboard.press('ArrowDown');
    await sleep(500);
    await page.keyboard.press('ArrowDown');
    await sleep(500);
    await page.keyboard.press('Enter');
    await sleep(500);
    await expect(page.locator('xpath=//h1').first()).toHaveText('Projects');

    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).not.toBeVisible();

    await page.goto(baseUrl);
    await page.click('[data-testid="kbar-toggle"]');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();
    await page.goto(baseUrl);
  });

  test('can use actions correctly', async () => {
    await page.goto(`${baseUrl}/blog`);
    await page.goto(`${baseUrl}/projects`);

    await page.click('[data-testid="kbar-toggle"]');
    await expect(
      page.locator('xpath=//*[@id="kbar-navigation"]//div').first(),
    ).toBeVisible();

    // actions (go back)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await sleep(1000);

    await expect(page.locator('xpath=//h1').first()).toHaveText('Blog');
  });
});
