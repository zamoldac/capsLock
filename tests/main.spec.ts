import { test, expect } from '@playwright/test';
import * as testData from '../testData/testData.json';
import { MainPage } from '../pages/mainPage';

test('Verify that the main page is loaded', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await expect(page).toHaveTitle(testData.validDataSet.mainPageTitle);
});

test('Ask for a cost quote scenario - Valid e2e flow with form steps verification', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.validDataSet.zipNumberValid);
  await mainPage.clickSubmitButtonStep1();
 // at this point, should add step no verification
});
