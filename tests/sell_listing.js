
const { url } = require('inspector');
let loginPage = require('../pages/login_page.js');
describe('seller listing', function () {

    it('seller_listing', function () {


        loginPage.login('https://test.chiragh.com/login', 'Atif.kamal@bestercapitalmedia.com', 'Atif123@@');
        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        let elm0 = element(by.xpath('/html/body/app-root/app-core/app-header/header/div/div/nav/div/div/ul/li[4]/a'));
        let EC0 = protractor.ExpectedConditions;
        browser.wait(EC0.elementToBeClickable(elm0), 5000);
        elm0.click();
        browser.sleep(1000);
        element(by.xpath('/html/body/app-root/app-core/app-header/header/div/div/nav/div/div/ul/li[4]/div/ul/li/a')).click();
        browser.waitForAngularEnabled(false);
        browser.sleep(4000);

        expect(element(by.name('passportNo')).isPresent()).toBe(true);
        var elm = element(by.name('passportNo'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 5000);
        browser.actions().mouseMove(elm).perform();
        elm.click();
        element(by.css('input[name="passportNo"]')).clear().sendKeys('Aw1233391');

        // browser.executeScript('window.scrollTo(0,500);').then(function () {
        //     expect(element(by.name('passportNo')).isPresent()).toBe(true);
        // })

        let elm1 = element(by.css('input[name="passportExpiryDate"]'));
        let EC1 = protractor.ExpectedConditions;
        browser.wait(EC1.elementToBeClickable(elm1), 5000);
        elm1.click();
        expect(element(by.css('.owl-dt-container')).isPresent()).toBe(true);
        let elm2 = element(by.css('.owl-dt-control-period-button'));
        let EC2 = protractor.ExpectedConditions;
        browser.wait(EC2.elementToBeClickable(elm2), 5000);
        elm2.click();
        let elm3 = element(by.css('[aria-label="2026"]'));
        let EC3 = protractor.ExpectedConditions;
        browser.wait(EC3.elementToBeClickable(elm3), 5000);
        elm3.click();

        element(by.css('[aria-label="August 2026"]')).click();
        browser.sleep(500);
        element(by.css('[aria-label="August 27, 2026"]')).click();
        let elm4 = element(by.name('idCardNo'));
        let EC4 = protractor.ExpectedConditions;
        browser.wait(EC4.elementToBeClickable(elm4), 5000);
        elm4.click();
        element(by.css('input[name="idCardNo"]')).clear().sendKeys('34578391');

        let elm5 = element(by.css('input[name="idCardExpiration"]'));
        let EC5 = protractor.ExpectedConditions;
        browser.wait(EC5.elementToBeClickable(elm5), 5000);
        browser.executeScript('arguments[0].click();', elm5);

        expect(element(by.css('.owl-dt-container')).isPresent()).toBe(true);
        let elm6 = element(by.css('.owl-dt-control-period-button'));
        let EC6 = protractor.ExpectedConditions;
        browser.wait(EC6.elementToBeClickable(elm6), 5000);
        elm6.click();
        let elm7 = element(by.css('[aria-label="2025"]'));
        let EC7 = protractor.ExpectedConditions;
        browser.wait(EC7.elementToBeClickable(elm7), 5000);
        browser.executeScript('arguments[0].click();', elm7);

        let elm8 = element(by.css('[aria-label="August 2025"]'));

        let EC8 = protractor.ExpectedConditions;
        browser.wait(EC8.elementToBeClickable(elm8), 5000);
        browser.executeScript('arguments[0].click();', elm8);

        let elm9 = element(by.css('[aria-label="August 20, 2025"]'));
        let EC9 = protractor.ExpectedConditions;
        browser.wait(EC9.elementToBeClickable(elm9), 5000);
        browser.executeScript('arguments[0].click();', elm9);


        // Find the file input element
        var elm10 = element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[1]/app-upload-file/div/input'));
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            expect(element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[1]/app-upload-file/div/input')).isPresent()).toBe(true);
        })
        // requires an absolute path
        var absolutePath = "C:\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Passport.jpg";
        let EC10 = protractor.ExpectedConditions;
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        elm10.clear().sendKeys(absolutePath);

        // Find the file input element
        var elm11 = element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[2]/app-upload-file/div/input'));
        // requires an absolute path
        var absolutePath1 = "C:\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\download (2).jpg";
        let EC11 = protractor.ExpectedConditions;
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        elm11.sendKeys(absolutePath1);
        browser.sleep(4000);

        var elm12 = element(by.buttonText('Next'));
        browser.executeScript('window.scrollTo(0,5000);').then(function () {
            expect(element(by.buttonText('Next')).isPresent()).toBe(true);
        })
        browser.executeScript('arguments[0].click();', elm12);
        //browser.sleep(3000);
        let elm13 = element(by.id('poaStatus'));
        let EC13 = protractor.ExpectedConditions;
        browser.wait(EC13.elementToBeClickable(elm13), 3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(element(by.id('poaStatus')).isPresent()).toBe(true);
        });
        elm13.click();
        var elm14 = element(by.cssContainingText('.ng-option-label', 'No'));
        let EC14 = protractor.ExpectedConditions;
        browser.wait(EC14.elementToBeClickable(elm14), 5000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(element(by.cssContainingText('.ng-option-label', 'No')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', elm14);
        browser.sleep(500);
        var elm15 = element(by.buttonText('Next'));
        browser.executeScript('window.scrollTo(0,4500);').then(function () {
            expect(element(by.buttonText('Next')).isPresent()).toBe(true);
        })
        browser.executeScript('arguments[0].click();', elm15);
        browser.sleep(3000);
        browser.waitForAngularEnabled(false);
        var elm16 = element(by.name('propertyStatus'));
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(element(by.name('ppropertyStatus')).isPresent()).toBe(true);
        });
        elm16.click();
        var elm17 = element(by.cssContainingText('.ng-option-label', 'Completed'));
        browser.executeScript('arguments[0].click();', elm17);
        browser.sleep(500);
        element(by.name('titleDeedNo')).click();
        element(by.name('titleDeedNo')).clear().sendKeys('ARE-DXB-41636');
        element(by.name('typeArea')).click();
        element(by.cssContainingText('.ng-option-label', 'Freehold')).click();
        element(by.name('propertyType')).click();
        element(by.cssContainingText('.ng-option-label', 'Villa')).click();
        element(by.name('projectName')).clear().sendKeys('Luxery Villa');
        element(by.name('bulidingName')).clear().sendKeys('Dubai Luxery Villas');
        element(by.name('netArea')).clear().sendKeys('15000');
        element(by.name('netAreaUnit')).click();
        element(by.cssContainingText('.ng-option-label', 'sqft')).click();
        element(by.name('address')).clear().sendKeys('Street#12 Po Box 24186  City:Sharja , Zip code  24186, Country  Emirates');
        element(by.name('city')).click();
        var elm19 = element(by.cssContainingText('.ng-option-label', 'Sharjah'));
        let EC19 = protractor.ExpectedConditions;
        browser.wait(EC19.elementToBeClickable(elm19), 4000);
        browser.executeScript('arguments[0].click();', elm19);
        element(by.name('mapLocation')).sendKeys('Sharjah - United Arab Emirate');
        browser.sleep(2000);
        element(by.name('mapLocation')).sendKeys(protractor.Key.ARROW_DOWN);
        element(by.name('mapLocation')).sendKeys(protractor.Key.RETURN);
        element(by.name('developerName')).clear().sendKeys('star developer');
        element(by.name('presentUse')).click();
        element(by.cssContainingText('.ng-option-label', 'Residential')).click();
        element(by.name('noOfBedrooms')).sendKeys('3');
        element(by.name('noOfBaths')).sendKeys('2');
        element(by.name('carParks')).sendKeys('1');
        element(by.name('kitchens')).sendKeys('1');
        browser.executeScript('window.scrollTo(0,2500)').then(function () {
            expect(element(by.name('propertyDes')).isPresent()).toBe(true);
        });
        expect(element(by.css('.ngx-editor-textarea')).isPresent()).toBe(true);
        var elm20 = element(by.css('.ngx-editor-textarea'));
        let EC20 = protractor.ExpectedConditions;
        browser.wait(EC20.elementToBeClickable(elm20), 4000);
        browser.executeScript('arguments[0].click();', elm20);
        elm20.sendKeys('hdkjsadhhskjdh');
        // Find the file input element
        expect(element(by.css('.custom-file-input')).isPresent()).toBe(true);
        var elm21 = element(by.css('.custom-file-input'));
        browser.executeScript('window.scrollTo(0,2700)').then(function () {
            expect(element(by.css('.custom-file-input')).isPresent()).toBe(true);
        });

        // requires an absolute path
        var absolutePath1 = "C:\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Scanned Title Deed.jpg";
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        elm21.sendKeys(absolutePath1);

        // Find the file input element
        expect(element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-property-detail/form/div[7]/div[2]/div[2]/div/div/input')).isPresent()).toBe(true);
        var elm21 = element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-property-detail/form/div[7]/div[2]/div[2]/div/div/input'));
        browser.executeScript('window.scrollTo(0,3800)').then(function () {
            expect.elm21;
        });

        // requires an absolute path
        var image1 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\292968_16012118210039308812.jpg';
        var image2 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\1554785546553-9.jpg';
        var image3 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\5ecb4470.jpg';
        var image4 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\49836-1.jpg';
        var image5 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\116268755.jpg';

        var absolutePath1 = image1 + "\n" + image2 + "\n" + image3 + "\n" + image4 + "\n" + image5;
        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        elm21.sendKeys(absolutePath1);
        browser.sleep(4000);
        var elm22 = element(by.buttonText('Next'));
        browser.executeScript('arguments[0].click();', elm22);
        browser.sleep(3000);
        browser.waitForAngularEnabled(false);
        var elm23 = element(by.name('mortgageStatus'));
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(element(by.name('mortgageStatus')).isPresent()).toBe(true);
        });

        elm23.click();
        var elm24 = element(by.cssContainingText('.ng-option-label', 'No'));

        browser.executeScript('arguments[0].click();', elm24);
        browser.sleep(500);
        var elm25 = element(by.buttonText('Next'));
        browser.executeScript('window.scrollTo(0,4500);').then(function () {
            expect(element(by.buttonText('Next')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', elm25);
        browser.sleep(2000);
        let elm26 = element(by.name('isRented'));
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            expect(element(by.name('isRented')).isPresent()).toBe(true);
        });
        elm26.click();
        browser.sleep(500);
        var elm27 = element(by.cssContainingText('.ng-option-label', 'No'));

        browser.executeScript('arguments[0].click();', elm27);
        browser.sleep(500);
        let elm28 = element(by.buttonText('Next'));
        browser.executeScript('window.scrollTo(0,4500);').then(function () {
            expect(element(by.buttonText('Next')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', elm28);
        browser.sleep(2000);
        let elm29 = element(by.name('independentValuation'));
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            expect(element(by.name('independentValuation')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', elm29);
        browser.sleep(3000);
        // Using getDriver to find the parent web element to find the cat li
        let var1 = element(by.cssContainingText('.companyNameUrl', 'JLL')).element(by.xpath('following-sibling::div'));
        let var2 = var1;
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            expect(element(by.id('propertyForm')).isPresent()).toBe(true);
        });
        var2.click();
        let elm30 = element(by.id('customControlIn_line'));
        browser.executeScript('window.scrollTo(0,500)').then(function () {
            expect(element(by.id('customControlIn_line')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', elm30);
        let elm31 = element(by.buttonText('Pay Now'));
        browser.executeScript('window.scrollTo(0,2000);').then(function () {
            expect(element(by.buttonText('Pay Now')).isPresent()).toBe(true);
        });
        browser.executeScript('arguments[0].click();', elm31);
        browser.sleep(2000);
        let elm32 = element(by.id('exampleRadios1'));
        browser.executeScript('arguments[0].click();', elm32);
        let elm33 = element(by.buttonText('Submit'));
        browser.executeScript('arguments[0].click();', elm33);
        browser.sleep(2000);
        element(by.css('.done-thanks')).click();
        browser.sleep(10000);




    });


});