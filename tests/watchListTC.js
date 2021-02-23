let BuyOC= require('../pages/BuyOC.js');
let loginPage = require('../pages/LoginOC.js');
const watchlistOC = require('../pages/watchlistOC.js');
let WatchListOC = require('../pages/watchlistOC.js');
var mytext = "";
describe('watch list', function () {
    
    it('login', async () => {
        let EC = protractor.ExpectedConditions;
        loginPage.login('https://test.chiragh.com/login', 'Atif.kamal33@gmail.com', 'Atif@100259');
        // browser.waitForAngularEnabled(false);
        // browser.sleep(6000);
        // WatchListOC.markAsFAv();
        // browser.sleep(3000);
        // WatchListOC.dropdownMenuLink();
        // browser.sleep(3000);
        // WatchListOC.dropdownMenuitem();
        // browser.sleep(3000);
        // WatchListOC.activityTab();
        // browser.sleep(3000);
        // WatchListOC.BuyTab();
        // browser.sleep(3000);
        // WatchListOC.WatchListTab();
        // browser.sleep(3000);
        // WatchListOC.verifypropertyD('.upcoming-pro-detail', mytext);
        // browser.sleep(3000);
        //loginPage.get('https://test.chiragh.com');
        browser.sleep(3000);
        browser.waitForAngularEnabled(false);
        BuyOC.viewAll();
        browser.sleep(3000);
        WatchListOC.markAsFAv0();
        browser.sleep(3000);
        WatchListOC.dropdownMenuLink();
        browser.sleep(3000);
        WatchListOC.dropdownMenuitem();
        browser.sleep(3000);
        WatchListOC.activityTab();
        browser.sleep(3000);
        WatchListOC.BuyTab();
        browser.sleep(3000);
        WatchListOC.WatchListTab();
        browser.sleep(3000);
        WatchListOC.verifypropertyD('.upcoming-pro-detail', mytext);
        browser.sleep(3000);
        loginPage.get('https://test.chiragh.com');
        browser.sleep(3000);
        BuyOC.BuyBtn();
        browser.sleep(3000);
        WatchListOC.markAsFAv0();
        browser.sleep(3000);
        WatchListOC.dropdownMenuLink();
        browser.sleep(3000);
        WatchListOC.dropdownMenuitem();
        browser.sleep(3000);
        WatchListOC.activityTab();
        browser.sleep(3000);
        WatchListOC.BuyTab();
        browser.sleep(3000);
        WatchListOC.WatchListTab();
        browser.sleep(3000);
        WatchListOC.verifypropertyD('.upcoming-pro-detail', mytext);
        browser.sleep(3000);
        WatchListOC.openPropertNP();
        browser.sleep(1000)
        loginPage.get('https://test.chiragh.com');
        WatchListOC.dropdownMenuLink();
        browser.sleep(3000);
        WatchListOC.dropdownMenuitem();
        browser.sleep(3000);
        WatchListOC.activityTab();
        browser.sleep(3000);
        WatchListOC.BuyTab();
        browser.sleep(3000);
        WatchListOC.WatchListTab();
        browser.sleep(3000);
        WatchListOC.verifypropertyD('.upcomming-properties', mytext);
        browser.sleep(6000);




    });

});