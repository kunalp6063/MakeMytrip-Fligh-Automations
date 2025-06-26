const { test } = require('@playwright/test');
const { HomePageActions } = require('../pages/HomePageActions');
//const { SearchResultsActions } = require('../pages/SearchResultsActions');
const { getTomorrow } = require('../utils/dateUtil');
const testData = require('../data/testData.json');

test('Book one-way flight Mumbai → London', async ({ page }) => {
 // test.setTimeout(60000);
  const homePage = new HomePageActions(page); 
  //const results = new SearchResultsActions(page);


 await page.goto('https://www.makemytrip.com', { waitUntil: 'domcontentloaded' });
 // await page.waitForTimeout(2000);
 await homePage.closeLoginPopupIfPresent();
 // await page.waitForTimeout(2000);
 await homePage.setFromCity(testData.from);
 await homePage.setToCity(testData.to);

 const tomorrow = getTomorrow();  
 console.log("Selecting date:", tomorrow); 
 await homePage.selectDate(tomorrow);
 await homePage.selectPassengers(testData.adults, testData.children);
 await homePage.clickSearch();
 await page.waitForTimeout(5000);

  
  
});




  

