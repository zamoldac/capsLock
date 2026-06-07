import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData/testData.json';

export class MainPage {
  readonly page: Page;
  readonly enterZipCodeInput: Locator;
  readonly submitButtonStep1: Locator;
  readonly independeceOptionStep2: Locator;
  readonly safetyOptionStep2: Locator;
  readonly therapyOptionStep2: Locator;
  readonly otherOptionsStep2: Locator;
  readonly nextButtonStep2: Locator;
  readonly ownedOptionStep3: Locator;
  readonly rentalOptionStep3: Locator;
  readonly mobileOoptionStep3: Locator;
  readonly nextButtonStep3: Locator;
  readonly nameFieldStep4: Locator;
  readonly emailFieldStep4: Locator;
  readonly goToEstimateStep4: Locator;
  readonly phoneNumberFieldStep5: Locator;
  readonly submitYourRequestButtonStep5: Locator;
  readonly stepCounter: Locator;
  readonly form1: Locator;
  readonly form2: Locator;
  readonly ooaZipEntryEmailField: Locator;
  readonly ooaZipEntryEmailSubmitButton: Locator;
  readonly ooaZipEntryFeedbackMessage: Locator;
  readonly firstStepErrorMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.form1 = page.locator("#form-container-1");
    this.form2 = page.locator("#form-container-2");
    this.enterZipCodeInput = page.locator('[placeholder="Enter ZIP Code"]').nth(0);
    this.submitButtonStep1 = page.locator('[data-tracking="btn-step-1"]').nth(0);
    this.independeceOptionStep2 = page.locator('[for="why-interested-independence-1"]').nth(0);
    this.safetyOptionStep2 = page.locator('[for="why-interested-safety-1"]').nth(0);
    this.therapyOptionStep2 = page.locator('[for="why-interested-therapy-1"]').nth(0);
    this.otherOptionsStep2 = page.locator('[for="why-interested-other-1"]').nth(0);
    this.nextButtonStep2 = page.locator('[data-tracking="btn-step-2"]').nth(0);
    this.ownedOptionStep3 = page.locator('[for="homeowner-owned-1"]').nth(0);
    this.rentalOptionStep3 = page.locator('[for="homeowner-rental-1"]').nth(0);
    this.mobileOoptionStep3 = page.locator('[for="homeowner-mobile-1"]').nth(0);
    this.nextButtonStep3 = page.locator('[data-tracking="btn-step-3"]').nth(0);
    this.nameFieldStep4 = page.locator('[placeholder="Enter Your Name"]').nth(0);
    this.emailFieldStep4 = page.locator('[placeholder="Enter Your Email"]').nth(0);
    this.goToEstimateStep4 = page.locator('[data-tracking="btn-step-4"]').nth(0);
    this.phoneNumberFieldStep5 = page.locator('[placeholder="(XXX)XXX-XXXX"]').nth(0);
    this.submitYourRequestButtonStep5 = page.locator('[data-tracking="btn-step-5"]').nth(0);
    this.stepCounter = page.locator('.stepProgress__stepCurrent').nth(0);
    this.ooaZipEntryEmailField = page.locator('[placeholder="Email Address"]').nth(0);
    this.ooaZipEntryEmailSubmitButton = page.locator('button[type=submit]').nth(5);
    this.ooaZipEntryFeedbackMessage = page.locator("[class='stepTitle__hdr fadeIn']").nth(0);
    this.firstStepErrorMessage = page.locator('.helpBlock');
   }

    async goToMainPage(){
    await this.page.goto('https://test-qa.capslock.global/');
   }
    async verifyMainPageTitle(){
    await expect(this.page).toHaveTitle(testData.validDataSet.mainPageTitle);
   }
    async verifyFinishPageReached(){
    await expect(this.page).toHaveTitle(testData.validDataSet.thankYouPageTitle);
    }
    async verifyReturnedErrorMessageFirstStep(expectedErrorMessage: string){
    const errorMessage = await this.form1.locator('.helpBlock').nth(0).textContent();
    expect(errorMessage).toBe(expectedErrorMessage);
   }
    async verifyFormCurrentStepNumber(expectedStepCounter: string){
    const currentStep = await this.stepCounter.filter({ visible: true }).textContent();
    expect(currentStep).toBe(expectedStepCounter);
   }
    async ooaZipEntryFinishMessage(expectedFinishMessage: string){
    const currentStep = await this.ooaZipEntryFeedbackMessage.textContent();
    expect(currentStep).toContain(expectedFinishMessage);
   }
     async enterEmailOOAzipField(email: string){
    await this.ooaZipEntryEmailField.scrollIntoViewIfNeeded();
    await this.ooaZipEntryEmailField.fill(email);
   }
    async enterZipCode(zipCode: string){
    await this.enterZipCodeInput.scrollIntoViewIfNeeded();
    await this.enterZipCodeInput.fill(zipCode);
   }
    async enterNameStep4(name: string){
    await this.nameFieldStep4.scrollIntoViewIfNeeded();
    await this.nameFieldStep4.fill(name);
   }
    async enterEmailStep4(email: string){
    await this.emailFieldStep4.scrollIntoViewIfNeeded();
    await this.emailFieldStep4.fill(email);
   }
    async enterPhoneNumberStep5(phoneNumber: string){
    await this.phoneNumberFieldStep5.scrollIntoViewIfNeeded();
    await this.phoneNumberFieldStep5.fill(phoneNumber);
   }
    async clickSubmitButtonStep1(){
    await this.submitButtonStep1.click();
   }
    async selectStep2IndependenceOption(){
    await this.independeceOptionStep2.click();
   }
    async selectStep2SafetyOption(){
    await this.safetyOptionStep2.click();
   }
    async selectStep2TherapyOption(){
    await this.therapyOptionStep2.click();
   }
    async selectStep2OtherOption(){
    await this.otherOptionsStep2.click();
   }
   async selectStep3OwnedOption(){
    await this.ownedOptionStep3.click();
   }
    async selectStep3RentalOption(){
    await this.rentalOptionStep3.click();
   }
    async selectStep3MobileOption(){
    await this.mobileOoptionStep3.click();
   }
   async clickNextButtonStep3(){
    await this.nextButtonStep3.click();
   }
   async clickSubmitOOAzipField(){
    await this.ooaZipEntryEmailSubmitButton.click();
   }

 }