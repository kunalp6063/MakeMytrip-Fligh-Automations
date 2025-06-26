const { HomePageLocators } = require('./HomePageLocators');

class HomePageActions {
  constructor(page) {
    this.page = page;
    this.locators = new HomePageLocators();
  }

  async closeLoginPopupIfPresent() {
    try {
      await this.page.waitForTimeout(2000);
      const popup = this.page.locator(`xpath=${this.locators.popupCloseBtn}`);
      if (await popup.isVisible()) {
        await popup.click({ force: true });
        console.log("Popup closed successfully.");
      } else {
        console.log("Popup not visible.");
      }

    } catch (error) {
      console.log("Popup not found or already closed.");
    }
  }

  async setFromCity(city) {
  await this.page.click(this.locators.fromInput);
  await this.page.fill(this.locators.fromTextbox, city);
  await this.page.waitForSelector(this.locators.citySuggestion(city));
  await this.page.click(this.locators.citySuggestion(city));
}

async setToCity(city) {
  await this.page.click(this.locators.toInput);
  await this.page.fill(this.locators.toTextbox, city);
  await this.page.waitForSelector(this.locators.citySuggestion(city));
  await this.page.click(this.locators.citySuggestion(city));
}

 async selectDate(dateString) {
  
  await this.page.evaluate(() => {
    const header = document.querySelector('#SW');
    if (header) header.style.display = 'none';
  });

  await this.page.click(this.locators.departureLabel, { force: true });

  const dateLocator = `div[aria-label="${dateString}"]`;
  await this.page.waitForSelector(dateLocator, { timeout: 10000 });
  await this.page.locator(dateLocator).click();
}

 async selectPassengers(adults, children) {
  await this.page.click(this.locators.travellerBtn, { force: true });

  // Select correct number of adults
  const adultSelector = `[data-cy="adults-${adults}"]`;
  await this.page.click(adultSelector);

  // Select correct number of children
  const childSelector = `[data-cy="children-${children}"]`;
  await this.page.click(childSelector);

  await this.page.click(this.locators.travellerApplyBtn);
}

 async clickSearch() {
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'networkidle' }), 
    this.page.click(this.locators.searchBtn),
  ]);
}

}


module.exports = { HomePageActions };
