import { test, expect } from '@playwright/test';
import { verifyTaskInColumn } from './Helper';

import * as fs from 'fs';

// Load the JSON file
const testCases = JSON.parse(fs.readFileSync('./test data/testCases.json', 'utf-8'));

// Iterate through each test case
testCases.forEach((testCase) => {
  test(testCase.testCaseId, async ({ page }) => {
    // Log the description for clarity
    console.log(`Running ${testCase.testCaseId}: ${testCase.description}`);

    // Perform the steps
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

    /// Navigate to the specified application (Web or Mobile)
    await page.locator(`//h2[contains(text(), "${testCase.app}")]`).click();

    // Verify the task in the specified column
    await verifyTaskInColumn(
      page,
      testCase.columnName,
      testCase.taskName,
      testCase.tags
    );
  });
});