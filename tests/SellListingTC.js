let loginPage = require('../pages/LoginOC.js');
let sell_listing = require('../pages/sellerOC.js');
describe('property sell process', function(){
    it('seller_listing', function() {
        
        loginPage.login('https://test.chiragh.com/login', 'Atif.kamal@bestercapitalmedia.com', 'Atif123@@');
        browser.waitForAngularEnabled(false);
        browser.sleep(8000)
        sell_listing.list();
        browser.sleep(500);
        sell_listing.sale_Listing();
        browser.sleep(1000);
        sell_listing.ownerForm();
        browser.sleep(1000)
        sell_listing.poaform();
        browser.sleep(1000);
        sell_listing.PropertyForm();
        browser.sleep(1000);
        sell_listing.mortgageForm();
        browser.sleep(1000);
        sell_listing.rentForm();
        browser.sleep(1000);
        sell_listing.valuationForm();
        browser.sleep(1000);
        sell_listing.DoneThanks();
        browser.sleep(1000);
    });
});