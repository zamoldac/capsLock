import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData/testData.json';

export class MainPage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
   }

    async goToMainPage() {
    await this.page.goto('https://test-qa.capslock.global/');
   }
 }