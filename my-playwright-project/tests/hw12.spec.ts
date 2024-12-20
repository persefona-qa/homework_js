const { test, expect } = require('@playwright/test');

// Task 1
test('Task 1: Login and Logout Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'harry_potter');
  await page.fill('#password', 'LeviOsa');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

  await page.click('a[href="/logout"]');
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});

// Task 2
test('Task 2: Checkbox Activation/Deactivation Test', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/radio.html');

  for (const checkboxId of ['vfb-6-0', 'vfb-6-1', 'vfb-6-2']) {
    await page.check(`#${checkboxId}`);
    await expect(page.locator(`#${checkboxId}`)).toBeChecked();
  }

  for (const checkboxId of ['vfb-6-0', 'vfb-6-1', 'vfb-6-2']) {
    await page.uncheck(`#${checkboxId}`);
    await expect(page.locator(`#${checkboxId}`)).not.toBeChecked();
  }
});

// Task 3
test('Task 3: Dropdown and Form Submission Test', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');
  
    const iframe = page.frameLocator('#iframeResult');
    await iframe.locator('body').waitFor(); 
  
    const dropdown = iframe.locator('select');
    await dropdown.waitFor({ state: 'visible' }); 
    await dropdown.selectOption('saab');
    await expect(dropdown).toHaveValue('saab');
  
    const button = iframe.locator('button');
    await button.waitFor({ state: 'visible' });
  
    const isButtonVisible = await button.isVisible();
    console.log(`Button visibility: ${isButtonVisible}`); 
    if (!isButtonVisible) throw new Error('Button is not visible.');
  
    await button.click();
  
    await expect(iframe.locator('body')).toContainText('You selected: Saab');
  });
  

// Task 4
test('Task 4: Form Submission Test', async ({ page }) => {
  await page.goto('http://formy-project.herokuapp.com/form');

  await page.fill('#first-name', 'Sam');
  await page.fill('#last-name', 'Robertson');
  await page.fill('#job-title', 'Test Automation Engineer');

  await page.check('input[value="radio-button-2"]');

  await page.check('input[value="checkbox-1"]');

  await page.selectOption('#select-menu', '2');

  await page.fill('#datepicker', '14/12/2024');

  await page.click('.btn-primary');

  await expect(page.locator('.alert')).toContainText('The form was successfully submitted!');
});
