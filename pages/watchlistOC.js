

let WatchList = function () {
    browser.waitForAngularEnabled(false);
    let post_count = element.all(by.css('.propertyId')).get(0);
    let mytext;
    let markasFavoriteClk = element(by.css('.markasFavorite'));
    let dropdownMenuLinkClk = element(by.id('dropdownMenuLink'));
    let dropdownMenuitemClk = element(by.cssContainingText('.dropdown-item', 'Hi'));
    let activityClk = element(by.id('activeTab'));
    let BuyClk = element(by.cssContainingText('.inner-tab', 'Buy'));
    let WatchListClk = element(by.cssContainingText('.w-tabs', 'Watchlist'));
    this.gettext = async () => {
        post_count = element.all(by.css('.propertyId')).get(0);
        mytext = await post_count.element(by.css('h6')).getText();
    };
    this.markAsFAv = function () {
        markasFavoriteClk.click();
        browser.sleep(2000);
    };
    this.dropdownMenuLink = function () {
        dropdownMenuLinkClk.click();
        browser.sleep();
    };
    this.dropdownMenuitem = function () {
        dropdownMenuitemClk.click();
        browser.sleep(2000);
    };
    this.activityTab = function () {
        activityClk.click();
        browser.sleep(2000);
    };
    this.BuyTab = function () {
        BuyClk.click();
        browser.sleep(2000);
    };
    this.WatchListTab = function () {
        WatchListClk.click();
        browser.sleep(2000);
    };
    this.verifypropertyD = function (var1, mytext) {
        let pPropertyId = element(by.cssContainingText(var1, mytext));
    }


};
module.exports = new WatchList();
