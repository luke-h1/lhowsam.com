/* eslint-disable no-await-in-loop */
import { expect, type BrowserContext, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';
import { getMetaKey } from './utils/getMetaKey';

let ctx: BrowserContext;
let page: Page;

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const urlPatternForPath = (path: string) => {
  const normalizedPath = path === '/' ? '/?' : `${path}/?`;
  return new RegExp(`^${escapeRegExp(baseUrl)}${normalizedPath}$`);
};

const key = getMetaKey();

const getCommandMenuIsland = (p: Page) =>
  p
    .locator('astro-island')
    .filter({ has: p.getByTestId('cmdk-icon') })
    .first();

const waitForCommandMenuReady = async (p: Page) => {
  const island = getCommandMenuIsland(p);

  await expect(p.getByTestId('cmdk-icon')).toBeVisible({ timeout: 15000 });
  await expect(island).toHaveCount(1);
  await expect
    .poll(
      async () =>
        island
          .evaluate(element => element.hasAttribute('ssr'))
          .catch(() => true),
      {
        message: 'expected command menu Astro island to finish hydrating',
        timeout: 15000,
      },
    )
    .toBe(false);

  await p.waitForTimeout(250);
};

const openMenuWithRetries = async (
  p: Page,
  openAttempt: () => Promise<void>,
) => {
  await waitForCommandMenuReady(p);

  const input = p.getByTestId('command-menu-input');
  const listbox = p.getByTestId('command-menu-listbox');

  for (let i = 0; i < 4; i += 1) {
    await openAttempt();
    try {
      await expect(listbox).toBeVisible({ timeout: 1000 });
      await expect(input).toBeVisible();
      await expect(input).toBeFocused();
      return;
    } catch {
      await p.waitForTimeout(250);
    }
  }

  await expect(listbox).toBeVisible();
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
};

const expectMenuClosed = async (p: Page) => {
  const input = p.getByTestId('command-menu-input');
  const listbox = p.getByTestId('command-menu-listbox');
  await expect(listbox).toBeHidden();
  await expect(input).toBeHidden();
};

const closeMenu = async (p: Page) => {
  // CMDK can remain open across navigations; ensure closed deterministically.
  for (let i = 0; i < 3; i += 1) {
    await p.keyboard.press('Escape');
    try {
      await expectMenuClosed(p);
      return;
    } catch {
      // try again
    }
  }
  await expectMenuClosed(p);
};

const openMenuWithShortcut = async (p: Page) => {
  await closeMenu(p);
  await p.locator('body').click({ position: { x: 1, y: 1 } });
  await openMenuWithRetries(p, async () => {
    await p.keyboard.press(`${key}+K`);
  });
};

const clickAndWaitForUrl = async (
  p: Page,
  expectedUrl: RegExp,
  click: () => Promise<void>,
) => {
  await click();
  await p.waitForURL(expectedUrl, { waitUntil: 'domcontentloaded' });
};

test.describe.skip('command menu', () => {
  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ browser }) => {
    ctx = await browser.newContext({
      permissions: ['clipboard-read', 'clipboard-write'],
    });

    page = await ctx.newPage();

    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await page.goto(baseUrl, { waitUntil: 'load' });
    await waitForCommandMenuReady(page);
  });

  test.afterEach(async () => {
    await ctx.close();
  });

  test('CMD+K opens command menu when clicked', async () => {
    await closeMenu(page);
    await openMenuWithRetries(page, async () => {
      await page.getByTestId('cmdk-icon').click();
    });
  });

  test('CMD+K opens command menu when CMD+K is pressed', async () => {
    await openMenuWithShortcut(page);
  });

  test('renders navigation items correctly', async () => {
    await openMenuWithShortcut(page);

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
      await openMenuWithShortcut(page);
    };

    const expectUrl = async (path: string) => {
      await expect(page).toHaveURL(urlPatternForPath(path));
    };

    const navigation = () => page.getByTestId('CommandMenu-navigation');

    await openMenu();
    await expect(navigation()).toBeVisible();

    await clickAndWaitForUrl(page, urlPatternForPath('/'), async () => {
      await page.getByTestId('command-menu-item-nav-/').click();
    });
    await expectMenuClosed(page);
    await expectUrl('/');
    await expect(page.getByTestId('home-page-title')).toBeVisible();

    await openMenu();
    await clickAndWaitForUrl(page, urlPatternForPath('/about'), async () => {
      await page.getByTestId('command-menu-item-nav-/about').click();
    });
    await expectMenuClosed(page);
    await expectUrl('/about');
    await expect(page.getByTestId('about-page-title')).toBeVisible();

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');

    await openMenu();
    await clickAndWaitForUrl(page, urlPatternForPath('/blog'), async () => {
      await page.getByTestId('command-menu-item-nav-/blog').click();
    });
    await expectMenuClosed(page);
    await expectUrl('/blog');
    await expect(page.getByTestId('page-title')).toHaveText('Blog');

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');

    await openMenu();
    await clickAndWaitForUrl(page, urlPatternForPath('/projects'), async () => {
      await page.getByTestId('command-menu-item-nav-/projects').click();
    });
    await expectMenuClosed(page);
    await expectUrl('/projects');
    await expect(page.getByTestId('page-title')).toHaveText('Projects');

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Commands item copies currently URL to clipboard', async () => {
    await openMenuWithShortcut(page);

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
    await openMenuWithShortcut(page);

    const social = page.getByTestId('command-menu-root');

    await expect(social).toBeVisible();

    await expect(
      page.getByTestId('command-menu-item-social-github'),
    ).toBeVisible();
    await expect(
      page.getByTestId('command-menu-item-social-linkedin'),
    ).toBeVisible();
    await expect(
      page.getByTestId('command-menu-item-social-twitter'),
    ).toBeVisible();
  });

  test('renders Commands items correctly', async () => {
    await page.goto(`${baseUrl}/blog`, { waitUntil: 'domcontentloaded' });
    await expect(page.getByTestId('page-title')).toHaveText('Blog');
    await openMenuWithShortcut(page);

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
    await openMenuWithShortcut(page);

    await page.getByTestId('command-menu-input').fill('foam');
    await page.getByTestId('command-menu-item-project-foam').click();
    await expectMenuClosed(page);
    await expect(page.getByTestId('article-title')).toHaveText('Foam');

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await openMenuWithShortcut(page);

    await page.getByTestId('command-menu-input').fill('forcing git merges');
    await page.getByTestId('command-menu-item-blog-forcing-git-merges').click();
    await expectMenuClosed(page);
    await expect(page.getByTestId('article-title')).toHaveText(
      'Forcing git merges',
    );

    await page.goto(baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await openMenuWithShortcut(page);

    await page.getByTestId('command-menu-input').fill('software engineer hive');
    await page
      .getByTestId(
        'command-menu-item-experience-hive-it-software-engineer-2022-05-01',
      )
      .click();
    await expectMenuClosed(page);
    await expect(page).toHaveURL(
      /\/about#hive-it-software-engineer-2022-05-01$/,
    );
    await expect(
      page.getByTestId('experience-hive-it-software-engineer-2022-05-01'),
    ).toBeVisible();
  });
});
