import { test, expect, Page } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { getMetaKey } from './utils/getMetaKey';
import { sleep } from './utils/sleep';

let page: Page;

const key = getMetaKey();
const delay = 600;

// eslint-disable-next-line no-shadow
const expectListboxToBeVisible = async (page: Page) => {
  await expect(page.locator('[role="listbox"]')).toBeAttached({
    timeout: 10000,
  });
};

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
    await sleep(2000);
  });

  test('CMD+K opens command menu when clicked', async () => {
    await page.click('[data-testid="cmdk-icon"]');
    await expectListboxToBeVisible(page);
  });

  test('CMD+K opens command menu when CMD+K is pressed', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);
  });

  test('renders navigation items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const navigation = page.locator('[role="dialog"]');
    await expect(navigation).toBeVisible();

    await expect(navigation.locator('text=Home')).toBeVisible();
    await expect(navigation.locator('text=About')).toBeVisible();
    await expect(navigation.locator('text=Blog')).toBeVisible();
    await expect(navigation.locator('text=Projects')).toBeVisible();
  });

  test('navigation items navigate correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const navigation = page.locator('[role="dialog"]');

    await expect(navigation).toBeVisible();

    await navigation.locator('text=Home').click();
    await expect(page.locator('h1').first()).toHaveText(
      'Luke // Software Engineer',
    );

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    await navigation.locator('text=About').click();
    await expect(page.locator('h1').first()).toHaveText('About');
    await page.goBack();

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    await navigation.locator('text=Blog').click();
    await expect(page.locator('h1').first()).toHaveText('Blog');
    await page.goBack();

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    await navigation.locator('text=Projects').click();
    await expect(page.locator('h1').first()).toHaveText('Projects');
    await page.goBack();

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);
  });

  test('Appearance items changes theme correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const appearance = page.locator('[role="dialog"]');

    await expect(appearance).toBeVisible();

    await appearance.locator('text=Dark').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'dark');

    await page.focus('body');
    await expect(page.locator('text=Theme set to Dark').first()).toBeVisible();

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    await appearance.locator('text=Light').click();

    await expect(page.locator('html')).toHaveAttribute('class', 'light');

    await page.focus('body');
    await expect(page.locator('text=Theme set to Light').first()).toBeVisible();

    await page.focus('body');

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    await appearance.locator('text=System').click();

    await expect(page.locator('html')).toHaveAttribute('class', 'light');

    await page.focus('body');
    await expect(
      page.locator('text=Theme set to System').first(),
    ).toBeVisible();
  });

  test('Commands item copies currently URL to clipboard', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });

    await expectListboxToBeVisible(page);

    const commands = page.locator('[role="dialog"]');

    await commands.scrollIntoViewIfNeeded();

    await expect(commands).toBeVisible();

    await commands.locator('text=Copy current URL').click();

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardText).toBe(`${baseUrl}/`);
  });

  test('renders social items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const social = page.locator('[role="dialog"]');

    await expect(social).toBeVisible();

    await expect(social.locator('text=Twitter')).toBeVisible();
    await expect(social.locator('text=GitHub')).toBeVisible();
    await expect(social.locator('text=LinkedIn')).toBeVisible();
  });

  test('renders Appearance items correctly', async () => {
    await page.focus('body');
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const appearance = page.locator('[role="dialog"]');

    await expect(appearance).toBeVisible();

    await expect(appearance.locator('text=System')).toBeVisible();
    await expect(appearance.locator('text=Light')).toBeVisible();
    await expect(appearance.locator('text=Dark')).toBeVisible();
  });

  test('renders Commands items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const commands = page.locator('[role="dialog"]');

    await expect(commands).toBeVisible();

    await expect(commands.locator('text=Copy current URL')).toBeVisible();
  });
});
