import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { getMetaKey } from './utils/keys';

let page: Page;

const key = getMetaKey();

test.describe('command menu', () => {
  test.beforeAll(async ({ browser }) => {
    const ctx = await browser.newContext({
      permissions: ['clipboard-read', 'clipboard-write'],
    });

    page = await ctx.newPage();

    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await page.goto(baseUrl);
  });

  test.beforeEach(async () => {
    page.keyboard.press('Escape');
    await page.waitForLoadState('networkidle');
    await page.focus('body');
  });

  test('displays CMD+K icon', async () => {
    await expect(page.locator('[data-testid="cmdk-icon"]')).toBeVisible();
  });

  test('CMD+K opens command menu when clicked', async () => {
    await page.click('[data-testid="cmdk-icon"]');
    await expect(page.locator('[role="listbox"]')).toBeVisible();
  });

  test('CMD+K opens command menu when CMD+K is pressed', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();
  });

  test('renders navigation items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const navigation = page.locator('[data-value="navigation"]');

    await expect(navigation).toBeVisible();

    await expect(navigation.locator('text=Home')).toBeVisible();
    await expect(navigation.locator('text=About')).toBeVisible();
    await expect(navigation.locator('text=Blog')).toBeVisible();
    await expect(navigation.locator('text=Projects')).toBeVisible();
  });

  test('navigation items navigate correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const navigation = page.locator('[data-value="navigation"]');
    await expect(navigation).toBeVisible();

    await navigation.locator('text=Home').click();
    await expect(page.locator('h1').first()).toHaveText(
      'Luke // Software Engineer',
    );

    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    await navigation.locator('text=About').click();
    await expect(page.locator('h1').first()).toHaveText('About');
    await page.goBack();

    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    await navigation.locator('text=Blog').click();
    await expect(page.locator('h1').first()).toHaveText('Blog');
    await page.goBack();

    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    await navigation.locator('text=Projects').click();
    await expect(page.locator('h1').first()).toHaveText('Projects');
    await page.goBack();

    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();
  });

  test('Appearance items changes theme correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const appearance = page.locator('[data-value="appearance"]');
    await expect(appearance).toBeVisible();

    await appearance.locator('text=Dark').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'dark');

    await page.focus('body');
    await expect(page.locator('text=Dark theme enabled').first()).toBeVisible();

    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    await appearance.locator('text=Light').click();

    await expect(page.locator('html')).toHaveAttribute('class', 'light');

    await page.focus('body');
    await expect(
      page.locator('text=Light theme enabled').first(),
    ).toBeVisible();

    await page.focus('body');

    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    await appearance.locator('text=System').click();

    await expect(page.locator('html')).toHaveAttribute('class', 'light');

    await page.focus('body');
    await expect(
      page.locator('text=System theme enabled').first(),
    ).toBeVisible();
  });

  test('Commands item copies currently URL to clipboard', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });

    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const commands = page.locator('[data-value="commands"]');

    await commands.scrollIntoViewIfNeeded();

    await expect(commands).toBeVisible();

    await commands.locator('text=Copy current URL').click();

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardText).toBe(`${baseUrl}/`);
  });

  test('renders Connect items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const connect = page.locator('[data-value="connect"]');

    await expect(connect).toBeVisible();

    await expect(connect.locator('text=github')).toBeVisible();
    await expect(connect.locator('text=LinkedIn')).toBeVisible();
  });

  test('renders Appearance items correctly', async () => {
    await page.focus('body');
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const appearance = page.locator('[data-value="appearance"]');

    await expect(appearance).toBeVisible();

    await expect(appearance.locator('text=System')).toBeVisible();
    await expect(appearance.locator('text=Light')).toBeVisible();
    await expect(appearance.locator('text=Dark')).toBeVisible();
  });

  test('renders Commands items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay: 300,
    });
    await expect(page.locator('[role="listbox"]')).toBeVisible();

    const commands = page.locator('[data-value="commands"]');

    await expect(commands).toBeVisible();

    await expect(commands.locator('text=Copy current URL')).toBeVisible();
  });
});
