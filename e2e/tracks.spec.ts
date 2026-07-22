import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('tracks', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/tracks`);
  });

  test('renders the page heading and sections', async () => {
    await expect(page.getByTestId('page-title')).toHaveText('Tracks');
    await expect(
      page.getByRole('heading', { name: 'Recently played' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Top tracks' }),
    ).toBeVisible();
  });

  test('exposes the top tracks time-range controls', async () => {
    const group = page.getByRole('group', { name: 'Time range' });
    await expect(group.getByRole('button', { name: '4 weeks' })).toBeVisible();
    await expect(group.getByRole('button', { name: '6 months' })).toBeVisible();
    await expect(group.getByRole('button', { name: 'All time' })).toBeVisible();
  });

  test('is reachable from the header navigation', async () => {
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Tracks' }).first().click();
    await expect(page).toHaveURL(/\/tracks\/?$/);
  });
});
