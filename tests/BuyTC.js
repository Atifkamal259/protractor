let BuyOC = require('../pages/BuyOC.js');
const LoginOC = require('../pages/LoginOC.js');
let loginPage = require('../pages/LoginOC.js');
const watchlistOC = require('../pages/watchlistOC.js');
describe('Buy Test', function () {
    browser.waitForAngularEnabled(false);
    it('login', function () {
        loginPage.login('https://test.chiragh.com/login', 'Atif.kamal@bestercapitalmedia.com', 'Atif123@@');

        browser.sleep(4000); 
    });
   
    it('View all', function () {
        browser.waitForAngularEnabled(false);
        BuyOC.viewAll();
        browser.sleep(1000);
        
    });
    it('property new tab', function(){
        browser.waitForAngularEnabled(false);
        BuyOC.openPropertNP();
    });
    
    // browser.sleep(4000);
    // it('current investment opper', function () {
    //     BuyOC.currentInvestmentOp();
    //     browser.sleep(2000);
     
    // });
    //     it('upcomming auction', function () {
    //     BuyOC.UpcommingAuctionOp();
    //     browser.sleep(4000);
    // }); 

    // it('navigate to homepage', function () {
    //     loginPage.get('https://test.chiragh.com/')
    //     browser.sleep(2000);
    //     BuyOC.BuyBtn();
    //     browser.sleep(4000);
    // });
    
    
});