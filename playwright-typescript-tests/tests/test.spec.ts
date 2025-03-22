// tests/test.spec.ts
import { test, expect } from '@playwright/test';
import { TestMethods } from './pages/testMethods.page';

let testMethods: TestMethods;
test.describe('Registration page', () => {

  test.beforeEach(async ({ page }) => {

      testMethods = new TestMethods(page);
     await testMethods.navigateToHome();
     const title = await testMethods.getTitle();
     expect(title).toContain('Search');
  });

  test('Verify search comlition', async ({ page }) => {
      await testMethods.pageRegistration();

      await testMethods.signUpLocator.click();
      await testMethods.nameField.type("Sergey");
      await testMethods.lastNameField.fill("Kozyriev");
      await testMethods.emailField.fill("kozurev@gmail.com");
      await testMethods.passwordField.type("@peYwTeg4YqUfTi");
      await testMethods.checkBox.waitFor({ state: 'visible' });
      await testMethods.checkBox.check();
      await testMethods.btnYalla.click();
      const popUpRegistrationFailed = await testMethods.registrationFailed.nth(1); // This should return a locator
      await popUpRegistrationFailed.waitFor({ state: 'visible' }); // Wait for the popup to be visible
      await expect(popUpRegistrationFailed).toHaveText("Registration failed");
      await page.waitForTimeout(3000);
      await testMethods.okBtn.click();





      // await page.waitForTimeout(10000);



      // await testMethods.fieldCity.fill("New York");
      // await page.waitForTimeout(1000);
      // await testMethods.fieldDate.fill("3/26/2025 - 3/27/2025");
      // await page.waitForTimeout(1000);
      // await testMethods.search.nth(0).click();
      // await page.waitForTimeout(5000);





  });



});
