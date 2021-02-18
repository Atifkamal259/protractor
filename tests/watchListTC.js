let WatchList = require('../pages/LoginOC.js')
let loginPage = require('../pages/LoginOC.js');
const watchlistOC = require('../pages/watchlistOC.js');
var mytext = "";
describe('watch list', function () {
    browser.waitForAngularEnabled(false);
    it('login', async () => {
        let EC = protractor.ExpectedConditions;
        loginPage.login('https://test.chiragh.com/login', 'Atif.kamal@bestercapitalmedia.com', 'Atif123@@');
        browser.waitForAngularEnabled(false);
        browser.sleep(6000);
        watchlistOC.markAsFAv();
        browser.sleep(6000);
        watchlistOC.dropdownMenuLink();
        browser.sleep(6000);
        watchlistOC.dropdownMenuitem();
        browser.sleep(6000);
        watchlistOC.activityTab();
        browser.sleep(6000);
        watchlistOC.BuyTab();
        browser.sleep(6000);
        watchlistOC.WatchListTab();
        browser.sleep(6000);
        watchlistOC.verifypropertyD('.upcoming-pro-detail', mytext);
        browser.sleep(10000);

    });

});