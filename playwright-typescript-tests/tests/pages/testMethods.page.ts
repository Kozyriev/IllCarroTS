// tests/pages/testMethods.page.ts
import { type Page, Locator } from '@playwright/test';

export class TestMethods {
  readonly page: Page;
  readonly signUpLocator: Locator;
  readonly nameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly checkBox: Locator;
  readonly btnYalla: Locator;
  readonly registrationFailed: Locator;
  readonly okBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signUpLocator = page.locator("//a[@ng-reflect-router-link='registration']");
    this.nameField = page.locator("//input[@id='name']");
    this.lastNameField = page.locator("//input[@id='lastName']");
    this.emailField = page.locator("//input[@id='email']");
    this.passwordField = page.locator("//input[@id='password']");
    this.checkBox = page.locator("//label[@for='terms-of-use']");
    this.btnYalla = page.locator("//button[@type='submit']");
    this.registrationFailed = page.locator("//h1[@class='title']");
    this.okBtn = page.locator("//button[@class='positive-button ng-star-inserted']");


  }
  async pageRegistration(){
    await this.signUpLocator.isVisible();
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async getTitle() {
    return await this.page.title();
  }
}
