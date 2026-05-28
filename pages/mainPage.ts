import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData/testData.json';

export class MainPage {
  readonly page: Page;
  readonly enterZipCodeInput: Locator;
  readonly submitButtonStep1: Locator;


  constructor(page: Page) {
    this.page = page;
    this.enterZipCodeInput = page.locator('[placeholder="Enter ZIP Code"]').nth(0);
    this.submitButtonStep1 = page.locator('[data-tracking="btn-step-1"]').nth(0);
   }

    async goToMainPage() {
    await this.page.goto('https://test-qa.capslock.global/');
   }

    async enterZipCode(zipCode: string) {
    await this.enterZipCodeInput.scrollIntoViewIfNeeded();
    await this.enterZipCodeInput.fill(zipCode);
   }

    async clickSubmitButtonStep1() {
    await this.submitButtonStep1.click();
   }

 }