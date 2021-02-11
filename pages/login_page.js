
let loginPage = function () {

    this.login = function (url, username, password) {
        this.get(url);
        this.enterusername(username);
        this.enteruserpassword(password);
        this.clickGo();
        browser.sleep(3000);
    };

    this.enterusername = function (username) {
        element(by.name('un')).click();
        element(by.name('un')).clear().sendKeys(username);
    };
    this.enteruserpassword = function (password) {
        element(by.name('userPassword')).click();
        element(by.name('userPassword')).clear().sendKeys(password);
    };

    this.get = function (url) {
        browser.get(url);
       
        browser.waitForAngularEnabled(false);

    };
    

    this.clickGo = function () {
        element(by.xpath('/html/body/app-root/app-core/app-login/section/div/div/div/div/div[5]/div/div/button')).click();
    };

    
};

module.exports = new loginPage();