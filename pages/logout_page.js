let loginPage = require('../pages/login_page.js');
let logoutPage = function () {
    this.logout= function(){
        loginPage.login('https://test.chiragh.com/login', 'Atif@getnada.com', 'Atif@100259');
        browser.sleep(4000);
        browser.waitForAngularEnabled(false);
        element(by.id('dropdownMenuLink')).click();
        browser.sleep(4000);
        element(by.xpath('/html/body/app-root/app-core/app-header/header/div/div/nav/div/div/div[2]/div/div/div/a[2]')).click();
        browser.sleep(6000);
    }

    


};

module.exports = new logoutPage();