class HomePageLocators {
  constructor() {
    // Popup close button (advertisement popup)
    this.popupCloseBtn = "//span[contains(@class, 'commonModal__close')]";

    // City suggestion dropdown (for selecting city)
    this.citySuggestion = city => `//p[contains(text(),"${city}")]`;
  
    // Source city input 
    this.fromInput = '//*[@id="fromCity"]';

    // Source city textbox 
    this.fromTextbox = 'input[placeholder="From"]';

    // Destination city input
    this.toInput = '//*[@id="toCity"]';

    // Destination textbox
    this.toTextbox = 'input[placeholder="To"]';

    // Departure date label
    this.departureLabel = 'label[for="departure"]';
  
    // Search flights button
    this.searchBtn = '.primaryBtn.font24.latoBold.widgetSearchBtn';

    // Traveller section
    this.travellerBtn = '#travellers';

    // Increase adult count
    this.adultIncrementBtn = '[data-cy="adults-1"]';
    // Increase children count
    this.childIncrementBtn = '[data-cy="children-1"]'; 
    // Apply button in traveller section
    this.travellerApplyBtn = '[data-cy="travellerApplyBtn"]';
  }
}

module.exports = { HomePageLocators };
