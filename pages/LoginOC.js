let loginPage = function () {
let UserPassword = element(by.name('userPassword'));
let EC = protractor.ExpectedConditions;
let UserName = element(by.name('un'));
let loginBtn = element(by.buttonText('Log In'));
let searchelem = element(by.css("[placeholder='Try “Villa in Dubai”']"));
let searchelem1 = element(by.css('.cursor'));
let typeofarea = element(by.name('typeOfArea'));
let typeofareainput = typeofarea.element(by.css('.ng-input'));

    this.login = function (url, username, password) {
        browser.waitForAngularEnabled(false);
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
    this.clicksearch = function(){
        browser.waitForAngularEnabled(false);
      browser.wait(EC.elementToBeClickable(searchelem1), 5000);
      expect(searchelem1.isPresent()).toBe(true);
      browser.executeScript('arguments[0].click();', searchelem1);
      browser.sleep(2000);
      typeofarea.click();
      browser.sleep();
      typeofareainput.sendKeys('freehold');


    //   searchelem.sendKeys("Hello");
      browser.sleep(2000);



    }

    
};

module.exports = new loginPage();