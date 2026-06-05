import { test, expect } from '@playwright/test';
import * as testData from '../testData/testData.json';
import { MainPage } from '../pages/mainPage';

test('Verify that the user can navigate to the main page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await expect(page).toHaveTitle(testData.validDataSet.mainPageTitle);
});

test('Verify that the user can complete the cost quote flow while selecting all the options', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.validDataSet.zipNumberValid);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.selectStep2IndependenceOption();
  await mainPage.selectStep2SafetyOption();
  await mainPage.selectStep2TherapyOption();
  await mainPage.selectStep2OtherOption();
  await mainPage.nextButtonStep2.click();
  await mainPage.selectStep3OwnedOption();
  await mainPage.selectStep3RentalOption();
  await mainPage.selectStep3MobileOption();
  await mainPage.clickNextButtonStep3();
  await mainPage.enterNameStep4(testData.validDataSet.name);
  await mainPage.enterEmailStep4(testData.validDataSet.email);
  await mainPage.goToEstimateStep4.click();
  await mainPage.enterPhoneNumberStep5(testData.validDataSet.phoneNumber);
  await mainPage.submitYourRequestButtonStep5.click();
  await expect(page).toHaveTitle(testData.validDataSet.thankYouPageTitle);
});

test('Verify that the user can complete the cost quote flow with only required options selection', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.validDataSet.zipNumberValid);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.selectStep2IndependenceOption();
  await mainPage.nextButtonStep2.click();
  await mainPage.selectStep3RentalOption();
  await mainPage.clickNextButtonStep3();
  await mainPage.enterNameStep4(testData.validDataSet.name);
  await mainPage.enterEmailStep4(testData.validDataSet.email);
  await mainPage.goToEstimateStep4.click();
  await mainPage.enterPhoneNumberStep5(testData.validDataSet.phoneNumber);
  await mainPage.submitYourRequestButtonStep5.click();
  await expect(page).toHaveTitle(testData.validDataSet.thankYouPageTitle);
});

test('Verify that while the user is navigating through the cost quote flow the step counter is updated accordingly', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.validDataSet.zipNumberValid);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.verifyFormCurrentStepNumber('2 of 5');
  await mainPage.selectStep2IndependenceOption();
  await mainPage.nextButtonStep2.click();
  await mainPage.selectStep3RentalOption();
  await mainPage.clickNextButtonStep3();
  await mainPage.enterNameStep4(testData.validDataSet.name);
  await mainPage.enterEmailStep4(testData.validDataSet.email);
  await mainPage.goToEstimateStep4.click();
  await mainPage.enterPhoneNumberStep5(testData.validDataSet.phoneNumber);
  await mainPage.submitYourRequestButtonStep5.click();
  await expect(page).toHaveTitle(testData.validDataSet.thankYouPageTitle);
});