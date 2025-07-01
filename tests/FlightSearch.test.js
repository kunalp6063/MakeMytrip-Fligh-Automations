const { test } = require('@playwright/test');
const { HomePageActions } = require('../pages/HomePageActions');
const { getTomorrow } = require('../utils/dateUtil');
const testData = require('../data/testData.json');

test('Book one-way flight Mumbai → London', async ({ browser }) => {
  // असली ब्राउज़र जैसा दिखाने के लिए context create करो
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      'accept-language': 'en-US,en;q=0.9',
      'upgrade-insecure-requests': '1',
    },
  });

  const page = await context.newPage();
  const homePage = new HomePageActions(page);

  // Retry logic - agar pehli baar fail ho jaye to 2 aur baar try karo
  for (let i = 0; i < 3; i++) {
    try {
      await page.goto('https://www.makemytrip.com', {
        waitUntil: 'domcontentloaded',
        timeout: 20000,
      });
      break; // success ho gaya to loop से बाहर आओ
    } catch (e) {
      if (i === 2) throw e; // 3 बार try के बाद bhi fail तो error दिखाओ
      await page.waitForTimeout(3000); // थोड़ा wait करो और दुबारा try करो
    }
  }

  // बाकी की steps
  await homePage.closeLoginPopupIfPresent();
  await homePage.setFromCity(testData.from);
  await homePage.setToCity(testData.to);

  const tomorrow = getTomorrow();
  console.log("Selecting date:", tomorrow);
  await homePage.selectDate(tomorrow);
  await homePage.selectPassengers(testData.adults, testData.children);
  await homePage.clickSearch();
  await page.waitForTimeout(5000);
});
