const { userPassword } = require("./Registration");

let loginPage = function () {
let UserPassword = element(by.name('userPassword'));
let UserName = element(by.name('un'));
let loginBtn = element(by.buttonText('Log In'));
    this.login = function (url, username, password) {
        this.get(url);
        this.enterusername(username);
        this.enteruserpassword(password);
        this.clickGo();
        browser.sleep(1000);
    };

    this.enterusername = function (username) {
        UserName.click();
        UserName.clear().sendKeys(username);
    };
    this.enteruserpassword = function (password) {
        UserPassword.click();
        UserPassword.clear().sendKeys(password);
    };

    this.get = function (url) {
        browser.get(url);

    };
    

    this.clickGo = function () {
      loginBtn.click();
        };

    
};

module.exports = new loginPage();