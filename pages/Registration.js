
let Registeration = function () {
    browser.waitForAngularEnabled(false);
    let VC1=element(by.css('.ng-invalid'));
    let EC = protractor.ExpectedConditions;
    let userFirstName = element(by.name('userFirstName'));
    let userLastName = element(by.name('userlastName'));
    let userEmail = element(by.name('userEmail'));
    let userPassword = element(by.name('userPassword'));
    let userConfirmPassword = element(by.name('userConfirmPassword'));
    let Next_btn = element(by.buttonText('Next'));
    let Dob = element(by.name('dob'));
    let container_calander = element(by.id('owl-dt-picker-0'));
    let container_calander_btn = element(by.css('[aria-label="Choose month and year"]'));
    let prv = element(by.css('[aria-label="Previous 21 years"]'));
    let year = element(by.css('[aria-label="2001"]'));
    let month_year = element(by.css('[aria-label="August 2001"]'));
    let month_day_year = element(by.css('[aria-label="August 17, 2001"]'));
    let nationality = element(by.name('nationality'));
    let nationality_Opt = element(by.cssContainingText('.ng-option-label', 'Pakistani'));
    let address = element(by.name('address'));
    let poBox = element(by.name('poBox'));
    let country = element(by.name('country'));
    let country_Opt = element(by.cssContainingText('.ng-option-label', 'Pakistan'));
    let city = element(by.name('city'));
    let city_Opt = element(by.cssContainingText('.ng-option-label', 'Karachi'));
    let idenType = element(by.name('identificationType'));
    let NationalID_no=element(by.name('idCardNo'));
    let IdCard_input=element(by.css('input[name="idCardNo"]'));
    let idenType_Opt1 = element(by.cssContainingText('.ng-option-label', 'National ID'));
    let passport_no = element(by.name('passportNo'));
    let passport_input = element(by.css('input[name="passportNo"]'));
    let idenType_Opt2 = element(by.cssContainingText('.ng-option-label', 'Passport'));
    let Passport_exp_date = element(by.css('input[name="passportExpiryDate"]'));
    let PPyear = element(by.css('[aria-label="2026"]'));
    let PPmonth_year = element(by.css('[aria-label="August 2026"]'));
    let PPmonth_day_year = element(by.css('[aria-label="August 27, 2026"]'));
    let mobileCode = element(by.name('mobileCode'));
    let code_Opt = element(by.cssContainingText('.ng-option-label', '(+92) Pakistan'));
    let mobileNo = element(by.name('mobileNo'));
    let phoneCode = element(by.name('phoneCode'));
    let phoneNo = element(by.name('phoneNo'));
    let term_checkbox = element(by.id('gridCheck'));
    let Register_btn = element(by.buttonText('Register'));
    let Proceed_btn = element(by.buttonText('Proceed'));
    let done_thanks =   element(by.css('.done-thanks'));
    let thanksVar = element(by.cssContainingText('.heading-for-registrattion','Thank You'));
    let thanksVar0 = element(by.cssContainingText('.heading-for-registrattion','for Registering on Chiragh'));
    let thanksVar1 =element(by.cssContainingText('.link-sent','We have sent you an account activation link on your email('));

    this.validcheck = function(field, inputdirty, inputclean){
        field.clear().sendKeys(inputdirty);
        expect(field.getAttribute('class')).toMatch('ng-invalid');
        expect(field.getAttribute('class')).toMatch('ng-dirty');
        console.log('wrong input');
        browser.sleep(1000);
        field.clear().sendKeys(inputclean);
        expect(field.getAttribute('class')).toMatch('ng-invalid');
        expect(field.getAttribute('class')).toMatch('ng-dirty');
        console.log('valid input');
    }

    this.enterUserFirstName = function (input1, input2) {
     this.validcheck(userFirstName, input1, input2);
    };
    this.enterUserLastName = function (input1, input2) {
        this.validcheck(userLastName, input1, input2);
    };
    this.enterUserEmail = function (input1, input2) {
        this.validcheck(userEmail, input1, input2);
    };
    this.userPassword = function (input1, input2) {
        this.validcheck(userPassword, input1, input2);
        browser.executeScript('window.scrollTo(0,5000);').then(function () {
            expect(userPassword.isPresent()).toBe(true);
        });
    };
    this.userConfirmPassword = function (input1, input2) {
        this.validcheck(userConfirmPassword, input1, input2);
    };
    this.nextbutton = function () {
        expect(Next_btn.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(Next_btn), 5000);
        Next_btn.click();
    };
    this.dateofBirth = function () {
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            expect(Dob.isPresent()).toBe(true);
        });
        expect(Dob.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(Dob), 5000);
        Dob.click();
    };
    this.setDob = function () {
        expect(container_calander.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
        container_calander_btn.click();
        browser.sleep(1000);
        prv.click();
        browser.wait(EC.elementToBeClickable(year), 5000);
        year.click();
        browser.sleep(500);
        month_year.click();
        browser.sleep(1000);
        month_day_year.click();
    };
    this.setnationality = function () {
        expect(nationality.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(nationality), 5000);
        nationality.click();
        browser.wait(EC.elementToBeClickable(nationality_Opt), 4000);
        browser.executeScript('arguments[0].click();', nationality_Opt);
    };
    this.setadress = function (enterAddress) {
        address.clear().sendKeys(enterAddress);
    };
    this.setPoBox = function (input1, input2) {
        this.validcheck(poBox, input1, input2);
    };
    this.setcountry = function () {
        country.click();
        browser.sleep(500);
        country_Opt.click();
    };
    this.setcity = function () {

        city.click();
        browser.wait(EC.elementToBeClickable(city_Opt), 4000);
        browser.executeScript('arguments[0].click();', city_Opt);
    };
    this.setidenTypeNIC = function () {
        idenType.click();
        browser.sleep(500);
        idenType_Opt1.click();
    };
    
    this.setNationalIdNo = function (input1, input2) {
        expect(NationalID_no.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(NationalID_no), 5000);
        browser.executeScript('arguments[0].click();',NationalID_no);
        browser.sleep(500);
        this.validcheck(IdCard_input, input1, input2);
        browser.sleep(500);
    };
    this.setidenTypePP = function () {
        idenType.click();
        browser.sleep(500);
        idenType_Opt2.click();
    };
    this.setPassportNo = function (input1, input2) {
        passport_no.click();
        browser.sleep(500);
        this.validcheck(passport_input, input1, input2);
    };
    this.setPassportExp = function () {
        Passport_exp_date.click();
        browser.sleep(500);
        expect(container_calander.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
        container_calander_btn.click();
        browser.wait(EC.elementToBeClickable(PPyear), 5000);
        PPyear.click();
        PPmonth_year.click();
        browser.sleep(500);
        PPmonth_day_year.click();
    };
    
   
    this.setmobilecode = function () {
        mobileCode.click();
        browser.sleep(500);
        code_Opt.click();
    };
    this.setmobileNo = function (entermobileNo) {
        mobileNo.clear().sendKeys(entermobileNo);
        
    };
    this.setPhonecode = function () {
        phoneCode.click();
        browser.sleep(500);
        code_Opt.click();
    };
    this.setPhoneNo = function (enterphoneNo) {
        phoneNo.clear().sendKeys(enterphoneNo);
       
    };
    this.gridcheck= function(){
        term_checkbox.click();
        browser.sleep(500);
    };
    this.RegisterBtn = function(){
        Register_btn .click();
        browser.sleep(500);
    };
    this.DoneThanku = function(){
        done_thanks
    };
    this.ProceedBtn = function(){
        Proceed_btn.click();
        browser.sleep(500);
    };
    this.RegisterConfirmation = function(){
       expect(thanksVar.getText()).toBe('Thank You');
       expect(thanksVar0.getText()).toBe('for Registering on Chiragh');
       expect(thanksVar1.getText()).toBe('We have sent you an account activation link on your email(');
        console.log('Thank you page is verified');
    }
    
};

module.exports = new Registeration();









