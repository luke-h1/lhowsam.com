import { expect, type Page, test } from '@playwright/test';
import { baseUrl } from './config/baseUrl';

let page: Page;

test.describe('about', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${baseUrl}/about`);
  });

  test('should render correctly', async () => {
    await expect(page.getByTestId('about-page-title')).toBeVisible();
    await expect(page.getByTestId('about-page-headline')).toBeVisible();
    await expect(page.getByTestId('about-page-headline')).toContainText(
      'Software Developer focused on React Native, mobile, backend',
    );
    await expect(page.getByTestId('about-page-kicker')).toBeVisible();
    await expect(page.getByTestId('about-page-now')).toBeVisible();
  });
});
