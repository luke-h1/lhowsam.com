import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { getMetaKey } from './utils/getMetaKey';
import { sleep } from './utils/sleep';

let page: Page;

const key = getMetaKey();
const delay = 600;

const expectListboxToBeVisible = async (p: Page) => {
  const listbox = p.getByTestId('command-menu-listbox');
  await expect(listbox).toBeVisible({
    timeout: 10000,
  });
  await sleep(300);
};

test.describe('command menu', () => {
  test.describe.configure({ mode: 'serial' });

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
    await page.keyboard.press('Escape');
    await page.focus('body');

    const listbox = page.getByTestId('command-menu-listbox');
    await expect(listbox)
      .not.toBeVisible({ timeout: 5000 })
      .catch(() => {});

    await sleep(500);
  });

  test('CMD+K opens command menu when clicked', async () => {
    await page.getByTestId('cmdk-icon').click();
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

    const navigation = page.getByTestId('CommandMenu-navigation');
    await expect(navigation).toBeVisible();

    const navItemTestIds = [
      'command-menu-item-nav-/',
      'command-menu-item-nav-/about',
      'command-menu-item-nav-/blog',
      'command-menu-item-nav-/projects',
    ] as const;
    await Promise.all(
      navItemTestIds.map(id => expect(page.getByTestId(id)).toBeVisible()),
    );
  });

  test('navigation items navigate correctly', async () => {
    const openMenu = async () => {
      await page.keyboard.press('Escape');
      await page.focus('body');
      await sleep(300);
      await page.keyboard.press(`${key}+K`, { delay });
      await expectListboxToBeVisible(page);
    };

    const navigation = () => page.getByTestId('CommandMenu-navigation');

    await openMenu();
    await expect(navigation()).toBeVisible();

    await page.getByTestId('command-menu-item-nav-/').click();
    await expect(page.getByTestId('command-menu-listbox')).not.toBeVisible();
    await expect(page.getByTestId('home-page-title')).toBeVisible();

    await openMenu();
    await page.getByTestId('command-menu-item-nav-/about').click();
    await expect(page.getByTestId('command-menu-listbox')).not.toBeVisible();
    await expect(page.getByTestId('about-page-title')).toBeVisible();

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');

    await openMenu();
    await page.getByTestId('command-menu-item-nav-/blog').click();
    await expect(page.getByTestId('command-menu-listbox')).not.toBeVisible();
    await expect(page.getByTestId('page-title')).toHaveText('Blog');

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');

    await openMenu();
    await page.getByTestId('command-menu-item-nav-/projects').click();
    await expect(page.getByTestId('command-menu-listbox')).not.toBeVisible();
    await expect(page.getByTestId('page-title')).toHaveText('Projects');

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Commands item copies currently URL to clipboard', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });

    await expectListboxToBeVisible(page);

    const commands = page.getByTestId('command-menu-root');

    await commands.scrollIntoViewIfNeeded();

    await expect(commands).toBeVisible();

    await page.getByTestId('command-menu-item-command-copy-url').click();

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardText.replace(/\/$/, '')).toBe(baseUrl);
  });

  test('renders social items correctly', async () => {
    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const social = page.getByTestId('command-menu-root');

    await expect(social).toBeVisible();

    await expect(page.getByTestId('command-menu-item-social-github')).toBeVisible();
    await expect(
      page.getByTestId('command-menu-item-social-linkedin'),
    ).toBeVisible();
  });

  test('renders Commands items correctly', async () => {
    await page.goto(`${baseUrl}/blog`, { waitUntil: 'networkidle' });
    await page.waitForLoadState('domcontentloaded');
    await sleep(1000);

    await page.keyboard.press(`${key}+K`, {
      delay,
    });
    await expectListboxToBeVisible(page);

    const commands = page.getByTestId('command-menu-root');

    await expect(commands).toBeVisible();

    await expect(
      page.getByTestId('command-menu-item-command-copy-url'),
    ).toBeVisible();

    await page.getByTestId('command-menu-item-command-copy-url').click();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied.replace(/\/$/, '')).toBe(`${baseUrl}/blog`);
  });

  test('searches blog posts, projects and experience anchors', async () => {
    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await page.focus('body');
    await sleep(500);

    await page.keyboard.press('Escape');
    await page.keyboard.press(`${key}+K`, { delay });
    await expectListboxToBeVisible(page);

    await page.getByTestId('command-menu-input').fill('foam');
    await page.getByTestId('command-menu-item-project-foam').click();
    await expect(page.getByTestId('article-title')).toHaveText('Foam');

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await page.focus('body');
    await sleep(400);

    await page.keyboard.press(`${key}+K`, { delay });
    await expectListboxToBeVisible(page);

    await page
      .getByTestId('command-menu-input')
      .fill('forcing git merges');
    await page
      .getByTestId('command-menu-item-blog-forcing-git-merges')
      .click();
    await expect(page.getByTestId('article-title')).toHaveText(
      'Forcing git merges',
    );

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await page.focus('body');
    await sleep(400);

    await page.keyboard.press(`${key}+K`, { delay });
    await expectListboxToBeVisible(page);

    await page
      .getByTestId('command-menu-input')
      .fill('software engineer hive');
    await page
      .getByTestId(
        'command-menu-item-experience-hive-it-software-engineer-2022-05-01',
      )
      .click();
    await expect(page).toHaveURL(
      /\/about#hive-it-software-engineer-2022-05-01$/,
    );
    await expect(
      page.getByTestId('experience-hive-it-software-engineer-2022-05-01'),
    ).toBeVisible();
  });
});
