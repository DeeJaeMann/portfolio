import { test, expect } from '@playwright/test';

test('Site title contains Dee J. Mann', async ({ page }) => {
    await page.goto('/');

    // Expect a title to contain Dee J. Mann 
    await expect(page).toHaveTitle(/Dee J. Mann/);
});

test('Homepage heading contains Dee Jae', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Dee Jae'})).toContainText(/Dee Jae/);
});

test('Mode button has svg named moon or sun', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('button[name="theme"]', {has: page.locator('svg')})).toHaveAttribute('name', /[moon]|[sun]/);
});