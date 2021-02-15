/*************Homepage**************/
let list =  element(by.xpath('/html/body/app-root/app-core/app-header/header/div/div/nav/div/div/ul/li[4]/a'));
let EC = protractor.ExpectedConditions;
let sale_listing =   element(by.xpath('/html/body/app-root/app-core/app-header/header/div/div/nav/div/div/ul/li[4]/div/ul/li/a'));
/*************owner detail page**************/
let passport_no =   element(by.name('passportNo'));
let passport_input =   element(by.css('input[name="passportNo"]'));
let Passport_exp_date =   element(by.css('input[name="passportExpiryDate"]'));
let container_calander =   element(by.css('.owl-dt-container'));
let container_calander_btn =   element(by.css('.owl-dt-control-period-button'));
let year =   element(by.css('[aria-label="2026"]'));
let month_year =   element(by.css('[aria-label="August 2026"]')).click();
let month_day_year = element(by.css('[aria-label="August 27; 2026"]'));
let idCard_no =   element(by.name('idCardNo'));
let idCard_input =   element(by.css('input[name="idCardNo"]')).clear().sendKeys('34578391');
let idCard_exp_date =   element(by.css('input[name="idCardExpiration"]'));
let passport_upload =   element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[1]/app-upload-file/div/input'));
let idcard_upload =   element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[2]/app-upload-file/div/input'));
let passport_Path = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Passport.jpg";
let idcardPath = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\download (2).jpg";
let next_btn =   element(by.buttonText('Next'));
/*************Attorny Details Page**************/
let poaStatus =   element(by.id('poaStatus'));
let No =   element(by.cssContainingText('.ng-option-label', 'No'));
/*************Property Detail page**************/
let propertyStatus =   element(by.name('propertyStatus'));
let propertyStatus_Opt =   element(by.cssContainingText('.ng-option-label', 'Completed'));
let titleDeedNo =   element(by.name('titleDeedNo'));
let typeArea =   element(by.name('typeArea'));
let typrArea_type =   element(by.cssContainingText('.ng-option-label', 'Freehold'));
let propertyType =   element(by.name('propertyType'));
let propertyType_Opt =   element(by.cssContainingText('.ng-option-label', 'Villa'));
let projectName =   element(by.name('projectName'));
let bulidingName =   element(by.name('bulidingName'));
let netArea =   element(by.name('netArea'));
let netAreaUnit =   element(by.name('netAreaUnit'));
let netAreaUnit_Opt =   element(by.cssContainingText('.ng-option-label', 'sqft'));
let address =   element(by.name('address'));
let city =   element(by.name('city'));
let city_Opt =   element(by.cssContainingText('.ng-option-label', 'Sharjah'));
let mapLocation =   element(by.name('mapLocation'));
let developerName=  element(by.name('developerName'));
let presentUse =   element(by.name('presentUse'));
let presentUse_Opt =   element(by.cssContainingText('.ng-option-label', 'Residential'));
let noOfBedrooms =   element(by.name('noOfBedrooms'));
let noOfBaths =   element(by.name('noOfBaths'));
let carParks =   element(by.name('carParks'));
let kitchens =   element(by.name('kitchens'));
let propertyDes =   element(by.name('propertyDes'));
let propertyDes_text =   element(by.css('.ngx-editor-textarea'));
let Titledeed_upload =   element(by.css('.custom-file-input'));
let Titledeed_path = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Scanned Title Deed.jpg";
let property_upload =   element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-property-detail/form/div[7]/div[2]/div[2]/div/div/input'));
var image1 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\292968_16012118210039308812.jpg';
var image2 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\1554785546553-9.jpg';
var image3 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\5ecb4470.jpg';
var image4 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\49836-1.jpg';
var image5 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\116268755.jpg';
property_image_path = 'image1'+ "\n" + 'image2' + "\n" + 'image3' + "\n" + 'image4'+ "\n" + 'image5';
/*************Mortgage page**************/
let mortgageStatus =   element(by.name('mortgageStatus'));
/*************Rent page**************/
let isRented =   element(by.name('isRented'));
/*************Valuation page**************/
let independentValuation =   element(by.name('independentValuation'));
let thirdparty_company =   element(by.cssContainingText('.companyNameUrl', 'JLL')).  element(by.xpath('following-sibling==div'));
let agree_checkbox1 =   element(by.id('customControlIn_line'));
let PayNow_btn =   element(by.buttonText('Pay Now'));
/*************Popup window**************/
let payNow_checkbox =   element(by.id('exampleRadios1'));
let Submit_btn =   element(by.buttonText('Submit'));
/*************Done page**************/
let done_thanks =   element(by.css('.done-thanks'));


/****------------------------*******/
/********Functions for listing******/
/****------------------------*******/
let sell_listing= function(){
    this.list= function(){
        browser.wait((EC).elementToBeClickable(list), 5000);
        element(by.xpath(list)).click();
    };
    this.sale_Listing=function(){
        browser.wait((EC).elementToBeClickable(sale_listing), 5000);
        element(by.xpath(sale_listing)).click();
    };
     this.ownerForm = function(){
        browser.waitForAngularEnabled(false);
        expect(passport_no.isPresent()).toBe(true);
        browser.actions().mouseMove(passport_no).perform();
        passport_no.click();
        passport_input.clear().sendKeys('Aw1233391');
        browser.wait(EC.elementToBeClickable(Passport_exp_date), 5000);
        Passport_exp_date.click();
        expect(container_calander.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
        container_calander_btn.click();
        browser.wait(EC.elementToBeClickable(year), 5000);
        year.click();
        month_year.click();
        browser.sleep(500);
        month_day_year.click();
        browser.wait(EC.elementToBeClickable(idCard_no), 5000);
        idCard_no.click();
        idCard_input.sendKeys('34578391');
        browser.wait(EC.elementToBeClickable(idCard_exp_date), 5000);
        browser.executeScript('arguments[0].click();', idCard_exp_date);
        browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
        container_calander_btn.click();
        browser.wait(EC.elementToBeClickable(year), 5000);
        year.click();
        month_year.click();
        browser.sleep(500);
        month_day_year.click();
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            expect(passport_upload.isPresent()).toBe(true);
        });
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        passport_upload.clear().sendKeys(passport_Path);
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        idcard_upload.sendKeys(idcardPath);
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,5000);').then(function () {
            expect(next_btn.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', next_btn);
    };

    this.poaform=function(){
        browser.wait(EC.elementToBeClickable(poaStatus), 3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(poaStatus.isPresent()).toBe(true);
        });
        poaStatus.click();
        browser.wait(EC.elementToBeClickable(No), 5000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(element(by.cssContainingText('.ng-option-label', 'No')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', No);
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,4500);').then(function () {
            expect(next_btn.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', next_btn);
        browser.sleep(3000);
    };
    this.PropertyForm=function(){
        browser.waitForAngularEnabled(false);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(propertyStatus.isPresent()).toBe(true);
        });
        propertyStatus.click();
        browser.executeScript('arguments[0].click();', propertyStatus_Opt);
        browser.sleep(500);
        titleDeedNo.click();
        titleDeedNo.clear().sendKeys('ARE-DXB-41636');
        typeArea.click();
        typrArea_type.click();
        propertyType.click();
        propertyType_Opt.click();
        projectName.clear().sendKeys('Luxery Villa');
        bulidingName.clear().sendKeys('Dubai Luxery Villas');
        netArea.clear().sendKeys('15000');
        netAreaUnit.click();
        netAreaUnit_Opt.click();
        address.clear().sendKeys('Street#12 Po Box 24186  City:Sharja , Zip code  24186, Country  Emirates');
        city.click();
        browser.wait(EC.elementToBeClickable(city_Opt), 4000);
        browser.executeScript('arguments[0].click();', city_Opt);
        mapLocation.sendKeys('Sharjah - United Arab Emirate');
        browser.sleep(2000);
        mapLocation.sendKeys(protractor.Key.ARROW_DOWN);
        mapLocation.sendKeys(protractor.Key.RETURN);
        developerName.clear().sendKeys('star developer');
        presentUse.click();
        presentUse_Opt.click();
        noOfBedrooms.sendKeys('3');
        noOfBaths.sendKeys('2');
        carParks.sendKeys('1');
        kitchens.sendKeys('1');
        browser.executeScript('window.scrollTo(0,2500)').then(function () {
            expect(propertyDes.isPresent()).toBe(true);
        });
        expect(propertyDes_text.isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(propertyDes_text), 4000);
        browser.executeScript('arguments[0].click();', propertyDes_text);
        propertyDes_text.sendKeys('hdkjsadhhskjdh');
        // Find the file input element
        expect(Titledeed_upload.isPresent()).toBe(true);
        browser.executeScript('window.scrollTo(0,2700)').then(function () {
            expect(Titledeed_upload.isPresent()).toBe(true);
        });
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        Titledeed_upload.sendKeys(Titledeed_path);
        browser.executeScript('window.scrollTo(0,3800)').then(function () {
            expect(property_upload.isPresent()).toBe(true);
        });
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        property_upload.sendKeys(property_image_path);
        browser.sleep(4000);
        browser.executeScript('arguments[0].click();', next_btn);
        browser.sleep(3000);
    };
    this.mortgageForm=function(){
        browser.waitForAngularEnabled(false);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
        expect(mortgageStatus.isPresent()).toBe(true);
        });
        mortgageStatus.click();
        browser.executeScript('arguments[0].click();', No);
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,4500);').then(function () {
            expect(next_btn.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', next_btn);
        browser.sleep(2000);
    };
    this.rentForm=function(){
        isRented.click();
        browser.sleep(500);
        browser.executeScript('arguments[0].click();', No);
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,4500);').then(function () {
            expect(next_btn.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', next_btn);
        browser.sleep(2000);
    };
    this.valuationForm=function(){
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            expect(independentValuation.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', independentValuation);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            expect(element(by.id('propertyForm')).isPresent()).toBe(true);
        });
        thirdparty_company.click();
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            expect(agree_checkbox1.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', agree_checkbox1);
        browser.executeScript('window.scrollTo(0,2000);').then(function () {
            expect(PayNow_btn.isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', PayNow_btn);
        browser.sleep(2000);
        browser.executeScript('arguments[0].click();', payNow_checkbox);
        browser.executeScript('arguments[0].click();', Submit_btn);
        browser.sleep(2000);
    };
    this.DoneThanks=function(){
        done_thanks.click();
        browser.sleep(10000);
    };


};
module.exports = new sell_listing();
