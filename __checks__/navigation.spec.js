const { test, expect } = require('@playwright/test');

test('navigation', async ({ page }) => {
  const homeresponse = await page.goto('https://illustrious-bubblegum-fd876c.netlify.app/');
  expect(homeresponse?.status()).toBeLessThan(400);
  await page.screenshot({ path: 'homepage.jpg' });
  await page.click('#left-sidebar');
  await page.screenshot({ path: 'left-sidebar.jpg' });
  await page.click('#right-sidebar');
  await page.screenshot({ path: 'right-sidebar.jpg' });
  await page.click('#no-sidebar');
  await page.screenshot({ path: 'no-sidebar.jpg' });
});