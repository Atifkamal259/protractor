const { Browser } = require('selenium-webdriver');
let loginPage = require('../pages/login_page.js');
let sell_listing = require('../pages/seller_page_objects.js');
describe('property sell process', function(){
    it('seller_listing', function() {
      
           
        loginPage.login('https://test.chiragh.com/login', 'Atif.kamal@bestercapitalmedia.com', 'Atif123@@');
        // sell_listing.list();
        // Browser.sleep(500);
        // sell_listing.sale_Listing();
        // Browser.sleep(1000);
        // sell_listing.ownerForm();
        // Browser.sleep(1000)
        // sell_listing.poaform();
        // Browser.sleep(1000);
        // sell_listing.PropertyForm();
        // Browser.sleep(1000);
        // sell_listing.mortgageForm();
        // Browser.sleep(1000);
        // sell_listing.rentForm();
        // Browser.sleep(1000);
        // sell_listing.valuationForm();
        // Browser.sleep(1000);
        // sell_listing.DoneThanks();
        // Browser.sleep(1000);
    });
});