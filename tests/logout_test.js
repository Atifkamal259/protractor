 let logoutPage = require('../pages/logout_page')
describe('logout test case', function () {

    it('logout_test', function () {
        logoutPage.logout();
        browser.sleep(2000);

    }) 

});