import { Page, expect } from '@playwright/test';

export async function verifyTaskInColumn(
  page: Page,
  columnName: string,
  taskName: string,
  tags?: string[]
) {
  // Verify the task is visible in the specified column
  const taskLocator = page.locator(
    `//h2[contains(text(), "${columnName}")]/following-sibling::div//h3[contains(text(), "${taskName}")]`
  );
  await expect(taskLocator).toBeVisible();

  // Verify tags if provided
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      const tagLocator = taskLocator.locator(
        `xpath=following-sibling::div//span[contains(text(), "${tag}")]`
      );
      await expect(tagLocator).toBeVisible();
    }
  }
}