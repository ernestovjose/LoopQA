import { test, expect } from '@playwright/test';
import { verifyTaskInColumn } from '../Helper'

test('Test Case 1', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

  // Verify the header is visible
  await expect(page.locator('header div > h1')).toBeVisible();

  // Verify the task "Implement user authentication" is in the "To Do" column with tags
  await verifyTaskInColumn(page, 'To Do', 'Implement user authentication', [
    'Feature',
    'High Priority',
  ]);

  // Wait for demonstration purposes (optional)
  await page.waitForTimeout(3000);
});