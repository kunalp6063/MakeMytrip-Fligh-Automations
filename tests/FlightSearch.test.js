const { test } = require('@playwright/test');
const { HomePageActions } = require('../pages/HomePageActions');
const { getTomorrow } = require('../utils/dateUtil');
const testData = require('../data/testData.json');

test('Book one-way flight Mumbai → London', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    ignoreHTTPSErrors: true,
    javaScriptEnabled: true,
  });

  const page = await context.newPage();
  const homePage = new HomePageActions(page);

  for (let i = 0; i < 3; i++) {
    try {
      await page.goto('https://www.makemytrip.com', {
        waitUntil: 'domcontentloaded',
        timeout: 20000,
      });
      break;
    } catch (e) {
      if (i === 2) throw e;
      await page.waitForTimeout(3000);
    }
  }

  await homePage.closeLoginPopupIfPresent();
  await homePage.setFromCity(testData.from);
  await homePage.setToCity(testData.to);

  const tomorrow = getTomorrow();
  await homePage.selectDate(tomorrow);
  await homePage.selectPassengers(testData.adults, testData.children);
  await homePage.clickSearch();
  await page.waitForTimeout(5000);
});
