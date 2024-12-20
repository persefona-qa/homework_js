import { test, expect } from '@playwright/test'; 

// Task 1
test('Task 1: Verify example.com content and attributes', async ({ page }) => {
  await page.goto('https://example.com/');

  await expect(page).toHaveTitle('Example Domain');
  await expect(page.url()).toContain('example.com');

  const paragraph = page.locator('body > div > p:nth-child(2)');
  const paragraphText = await paragraph.textContent();
  expect(paragraphText).toMatch(/This domain is for use in illustrative examples/);

  await expect(page.locator('h1')).toHaveText('Example Domain');
});

// Task 2
test('Task 2: Verify Playwright homepage content', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.url()).toMatch(/^https:\/\/playwright\.dev/);

  const links = page.locator('a', { hasText: 'Get started' });
  await expect(links).toHaveCount(1);
});

// Task 3
test('Task 3: Search on Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  const searchInput = page.locator('[name="q"]');
  await searchInput.fill('Playwright');

  await Promise.all([
    page.waitForNavigation(),
    searchInput.press('Enter'),
  ]);

  await expect(page.url()).toContain('search');
  await expect(page.locator('body')).toContainText('Playwright');
});

// Task 4
test('Task 4: Navigate Playwright documentation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  await Promise.all([
    page.waitForNavigation(),
    page.locator('a', { hasText: 'Get started' }).click(),
  ]);

  await expect(page.url()).toContain('/docs');
});
