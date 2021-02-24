

let WatchList = function () {
    browser.waitForAngularEnabled(false);
    // let EC = protractor.ExpectedConditions;
    let propertyElm1;
    let elm1 = element(by.cssContainingText('.property-info', 'Property ID: 42280'));
    // let elm2 = element(by.cssContainingText('.property-info', 'Property ID: 42280'));
    let elm3 = element(by.cssContainingText('.upcomming-properties', 'Property ID: 42280')).element(by.css('.upcoming-pro-right'));
    let elm4 = element(by.cssContainingText('.propertyId', 'Mall of Arabia, 18 Floors'));
    let elm5 = element(by.cssContainingText('.bid-header-outer', 'Property ID: 42280'));
    let markasFavoriteClk = elm1.element(by.css('.markasFavorite'));
    let markasFavoriteClk0 = elm1.element(by.css('.markasFavorite'));
    let dropdownMenuLinkClk = element(by.id('dropdownMenuLink'));
    let dropdownMenuitemClk = element(by.cssContainingText('.dropdown-item', 'Hi'));
    let activityClk = element(by.id('activeTab'));
    let BuyClk = element(by.cssContainingText('.inner-tab', 'Buy'));
    let WatchListClk = element(by.cssContainingText('.w-tabs', 'Watchlist'));
      this.gettext = async (var1,var2) => {
        propertyElm1 = var1.get(0);
        let mytext = await propertyElm1.element(by.css(var2)).getText();
        console.log('mytext_outside_function = ' + mytext);
    };
    this.openPropertNP = function () {
        browser.waitForAngularEnabled(false);
        browser.executeScript('window.scrollTo(0,600);').then(function () {
            expect(elm2.isPresent()).toBe(true);

            browser.sleep(6000);
        });
        elm4.click();
        browser.sleep(3000);
        this.gettext(elm5,'h5');
        /*****new window******/
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngularEnabled(false);
                browser.executeScript('window.scrollTo(0,25);').then(function () {
                    expect(markasFavoriteClk.isPresent()).toBe(true);
                    browser.actions().mouseMove(markasFavoriteClk).perform();

                });
                expect(markasFavoriteClk.isPresent()).toBe(true);
                browser.executeScript('arguments[0].click();', markasFavoriteClk);
                browser.sleep(2000);
            });
        });
        
    };
    this.markAsFAv = function () {
        browser.waitForAngularEnabled(false);
         browser.executeScript('window.scrollTo(0,800);').then(function () {
            expect(elm2.isPresent()).toBe(true);
            browser.actions().mouseMove(elm2).perform();
            browser.sleep(2000);

         });
        expect(markasFavoriteClk.isPresent()).toBe(true);
        browser.executeScript('arguments[0].click();', markasFavoriteClk);
        browser.sleep(2000);
    };
    this.markAsFAv0 = function () {
        // browser.executeScript('window.scrollTo(0,300);').then(function () {
            expect(elm3.isPresent()).toBe(true);
            browser.actions().mouseMove(elm3).perform();

        // });
        expect(markasFavoriteClk0.isPresent()).toBe(true);
        browser.executeScript('arguments[0].click();', markasFavoriteClk0);
        browser.sleep(2000);
    };
       this.dropdownMenuLink = function () {
        expect(dropdownMenuLinkClk.isPresent()).toBe(true);
        dropdownMenuLinkClk.click();
        browser.sleep(2000);
    };
    this.dropdownMenuitem = function () {
        expect(dropdownMenuitemClk.isPresent()).toBe(true);
        dropdownMenuitemClk.click();
        browser.sleep(2000);
    };
    this.activityTab = function () {
        expect(activityClk.isPresent()).toBe(true);
        activityClk.click();
        browser.sleep(2000);
    };
    this.BuyTab = function () {
        expect(BuyClk.isPresent()).toBe(true);
        BuyClk.click();
        browser.sleep(2000);
    };
    this.WatchListTab = function () {
        WatchListClk.click();
        browser.sleep(2000);
    };
    this.verifypropertyD = function (var1, var2) {
        let PropertyId = element(by.cssContainingText(var1, var2));
        expect(PropertyId.isPresent()).toBe(true);
    };

};
module.exports = new WatchList();
