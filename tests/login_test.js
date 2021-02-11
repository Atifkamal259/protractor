let loginPage = require('../pages/login_page.js');
describe('login test case', function () {

    it('Loging In', function () {

        loginPage.login('https://test.chiragh.com/login', 'Atif@getnada.com', 'Atif@100259');

        browser.sleep(4000)

    });
});