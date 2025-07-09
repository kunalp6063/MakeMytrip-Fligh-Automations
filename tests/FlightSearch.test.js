const { test } = require('@playwright/test');
const { HomePageActions } = require('../pages/HomePageActions');
//const { SearchResultsActions } = require('../pages/SearchResultsActions');
const { getTomorrow } = require('../utils/dateUtil');
const testData = require('../data/testData.json');

test('Book one-way flight Mumbai → London', async ({ page }) => {
 
  const homePage = new HomePageActions(page); 
 // const results = new SearchResultsActions(page);


await page.goto('https://www.makemytrip.com', { waitUntil: 'domcontentloaded' });

 // await page.waitForTimeout(2000);
  await homePage.closeLoginPopupIfPresent();
 

  //const home = new HomePageActions(page);
 await homePage.setFromCity(testData.from);
 await homePage.setToCity(testData.to);

 const tomorrow = getTomorrow();  // e.g. "Thu Jun 26 2025"
 console.log("Selecting date:", tomorrow); // debugging
 await homePage.selectDate(tomorrow);
 await homePage.selectPassengers(testData.adults, testData.children);
 await homePage.clickSearch();
 await page.waitForTimeout(2000);
 await page.waitForLoadState('networkidle');


 
});




  

