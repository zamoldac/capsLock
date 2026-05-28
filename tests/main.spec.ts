import { test, expect } from '@playwright/test';
import * as testData from '../testData/testData.json';
import { MainPage } from '../pages/mainPage';

test('Verify that the main page is loaded', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await expect(page).toHaveTitle(testData.validDataSet.mainPageTitle);
});
