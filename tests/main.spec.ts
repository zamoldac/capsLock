import { test, expect } from '@playwright/test';
import * as testData from '../testData/testData.json';
import { MainPage } from '../pages/mainPage';

test(' #1 Verify that the user can navigate to the main page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.verifyMainPageTitle();
});

test(' #2 Verify that the user can complete the cost quote flow while selecting all the options', async ({ page }) => {
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
  await mainPage.verifyFinishPageReached();
});

test(' #3 Verify that the user can complete the cost quote flow with only required options selection', async ({ page }) => {
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
  await mainPage.verifyFinishPageReached();
});

test(' #4 Verify that while the user is navigating through the cost quote flow the step counter is updated accordingly', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.validDataSet.zipNumberValid);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.verifyFormCurrentStepNumber('2');
  await mainPage.selectStep2IndependenceOption();
  await mainPage.nextButtonStep2.click();
  await mainPage.verifyFormCurrentStepNumber('3');
  await mainPage.selectStep3RentalOption();
  await mainPage.clickNextButtonStep3();
  await mainPage.verifyFormCurrentStepNumber('4');
  await mainPage.enterNameStep4(testData.validDataSet.name);
  await mainPage.enterEmailStep4(testData.validDataSet.email);
  await mainPage.goToEstimateStep4.click();
  await mainPage.verifyFormCurrentStepNumber('5');
  await mainPage.enterPhoneNumberStep5(testData.validDataSet.phoneNumber);
  await mainPage.submitYourRequestButtonStep5.click();
  await mainPage.verifyFinishPageReached();
});

test(' #5 Verify that when using out of area zip code the user is notified and he can enter his email for future notifications', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.invalidDataSet.zipNumberOOA);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.enterEmailOOAzipField(testData.validDataSet.email);
  await mainPage.clickSubmitOOAzipField();
  await mainPage.ooaZipEntryFinishMessage(testData.invalidDataSet.zipOOAFinishMessage);
});

test(' #6 Verify that user is notified when zip code is not entered', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.invalidDataSet.emptyZipCode);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.verifyReturnedErrorMessageFirstStep(testData.invalidDataSet.zipEmptyErrorMessage);
});

test(' #7 Verify that user is notified when a invalid zip code is entered', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToMainPage();
  await mainPage.enterZipCode(testData.invalidDataSet.invalidZipCode);
  await mainPage.clickSubmitButtonStep1();
  await mainPage.verifyReturnedErrorMessageFirstStep(testData.invalidDataSet.zipInvalidErrorMessage);
});