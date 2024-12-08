const { test, expect } = require('@playwright/test');


test('site homepage', async ({ page }) => {
  const response = await page.goto('https://illustrious-bubblegum-fd876c.netlify.app/');
  expect(response?.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/Telephasic by HTML5 UP/);
  await page.screenshot({ path: 'homepage.jpg' });
});
