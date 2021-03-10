let watchlistOC = require('../pages/watchlistOC')
let BuyOC = function () {

   browser.waitForAngularEnabled(false);

   let Buy_btn = element(by.cssContainingText('.nav-item', 'BUY'));
   let EC = protractor.ExpectedConditions;
   let ViewAll_btn = element(by.buttonText('View All'));
   let BidNow_btn = element(by.cssContainingText('.h3-title-22', ' Bid Now '));
   let CurrentInvestment = element(by.cssContainingText('.col-12', 'Current investment opportunities'));
   let UpcommingAuction = element(by.cssContainingText('.propertyId', 'Oberbrunner Ways, West Janellemouth, 293 sqft, Land'));
   let elm4 = element(by.cssContainingText('.upcoming-pro-left', ' Oberbrunner Ways, West Janellemouth, 293 sqft, Land '));
   let elm5 = element(by.cssContainingText('.bid-header-outer', 'Property ID: 42444'));
   let I_Owen_A_Company_btn = element(by.buttonText('I Own A Company'));
   let category = element(by.name('category'));
   let category_Opt = element(by.cssContainingText('.ng-option-label', 'Private'));
   let company_Name = element(by.name('company_Name'));
   let licenseNumber = element(by.name('licenseNumber'));
   let licenseIssuedBy = element(by.name('licenseIssuedBy'));
   let licenseIssuedBy_Opt = element(by.cssContainingText('.ng-option-label', '(CDA) Community Development Authority'));
   let licenseIssueDate = element(by.name('licenseIssueDate'));
   let container_calander = element(by.css('.owl-dt-container'));
   let container_calander_btn = element(by.css('.owl-dt-control-period-button'));
   let year = element(by.css('[aria-label="2017"]'));
   let month_year = element(by.css('[aria-label="May 2017"]'));
   let month_day_year = element(by.css('[aria-label="May 18, 2017"]'));
   let licenseExpYear = element(by.css('[aria-label="2027"]'));
   let licenseExpmonth_year = element(by.css('[aria-label="June 2027"]'));
   let licenseExpmonth_day_year = element(by.css('[aria-label="June 21, 2027"]'));
   let licenseExpiryDate = element(by.name('licenseExpiryDate'));
   let yearEstablishedDate = element(by.name('yearEstablished'));
   let Address = element(by.id('Address'));
   let country = element(by.name('country'));
   let country_Opt = element(by.cssContainingText('.ng-option-label', 'United Arab Emirates'));
   let city = element(by.css('ng-select[name="city"]>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)>input'))
   let city_Opt = element(by.cssContainingText('.ng-option-label', 'Ajman'));
   let poBox = element(by.name('pobox'));
   let Email1 = element(by.name('email'));
   let website = element(by.name('website'));
   let telephoneCode = element(by.name('telephoneCode'));
   let telephoneCode_input = element(by.cssContainingText('.ng-option-label', '(+92) Pakistan'));
   let telephone = element(by.name('telephone'));
   let FirstName = element(by.css('[placeholder="First Name"]'));
   let LastName = element(by.css('[placeholder="Last Name"]'));
   let Nationality = element(by.cssContainingText('.ng-placeholder', 'Nationality'));
   let Nationality_Opt = element(by.cssContainingText('.ng-option-label', 'United Arab Emirates'));
   let Designation = element(by.css('[placeholder="Designation"]'));
   let CountryCode = element(by.cssContainingText('.ng-placeholder', 'Country Code'));
   let MobileNumber = element(by.css('[placeholder="Mobile Number"]'));
   let Email2 = element(by.css('[placeholder="Email"]'));
   let passport_upload = element(by.cssContainingText('.custom-file-label', 'Scanned Passport Copy'));
   let idcard_upload = element(by.cssContainingText('.custom-file-label', 'Scanned ID Cop'));
   let passport_Path = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Passport.jpg";
   let idcardPath = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\download (2).jpg";
   let License = element(by.cssContainingText('.custom-file-label', 'License'));
   let next_btn = element(by.buttonText('Next'));
   let openhousebutton = element(by.css('.openHouseTop'));

   this.currentInvestmentOp = function () {
      browser.wait(EC.elementToBeClickable(CurrentInvestment), 5000);
      browser.executeScript('window.scrollTo(0,450)').then(function () {
         expect(CurrentInvestment.isPresent()).toBe(true)
      });
      browser.sleep(4000);

   };
   this.openPropertNP = function () {
      browser.waitForAngularEnabled(false); 
      browser.sleep(500)
      elm4.click();
      browser.sleep(1000)
      // browser.executeScript('window.scrollTo(0,600);').then(function () {
      //    expect(elm1.isPresent()).toBe(true);

      //    browser.sleep(4000);
      // });
           
      /*****new window******/
      browser.getAllWindowHandles().then(function (handles) {
         browser.switchTo().window(handles[1]).then(function () {
            browser.waitForAngularEnabled(false);
            browser.executeScript('window.scrollTo(0,40);').then(function () {
               browser.waitForAngularEnabled(false);
               browser.sleep(2000);
               expect(elm5.isPresent()).toBe(true);
               browser.actions().mouseMove(elm5).perform();
            });
            
            watchlistOC.gettext(elm5, 'h5');
            expect(BidNow_btn.isPresent()).toBe(true);
            browser.wait(EC.elementToBeClickable(BidNow_btn), 10000);
            BidNow_btn.click();
            // browser.executeScript('arguments[0].click()', BidNow_btn);
            browser.sleep(1000);

         });
      });
       // this.openhouse();
      this.BuyAsCompany();

   };
   // this.UpcommingAuctionOp = function () {

   //    browser.wait(EC.elementToBeClickable(UpcommingAuction), 5000);
   //    browser.executeScript('window.scrollTo(0,1500)').then(function () {
   //       expect(CurrentInvestment.isPresent()).toBe(true)
   //    });
   //    browser.sleep(4000);

   // };
   this.viewAll = function () {
      browser.waitForAngularEnabled(false);
      browser.executeScript('window.scrollTo(0,600)').then(function () {
         expect(UpcommingAuction.isPresent()).toBe(true);
         browser.wait(EC.elementToBeClickable(UpcommingAuction), 6000);
         browser.sleep(1000);
      });
      browser.actions().mouseMove(ViewAll_btn).perform();
      browser.sleep(1000);
      browser.executeScript('arguments[0].click();', ViewAll_btn);
      browser.sleep(2000);
      
   };
   // this.BuyBtn = function () {

   //    Buy_btn.click();
   //    browser.executeScript('window.scrollTo(0,350)').then(function () {
   //       expect(Buy_btn.isPresent()).toBe(true)
   //    });
   //    browser.sleep(2000);
   // };
   this.BuyAsCompany = function () {
      browser.waitForAngularEnabled(false);
      expect(I_Owen_A_Company_btn.isPresent()).toBe(true);
      browser.wait(EC.elementToBeClickable(I_Owen_A_Company_btn), 5000);
      
      browser.actions().mouseMove(I_Owen_A_Company_btn).perform();
      I_Owen_A_Company_btn.click();
      browser.sleep(2000);
      browser.executeScript('window.scrollTo(0,50)').then(function () {
         expect(category.isPresent()).toBe(true)
      });
      category.click();
      expect(category_Opt.isPresent()).toBe(true)
      browser.sleep(1000);
      browser.executeScript('arguments[0].click();', category_Opt);
      browser.sleep(500);
      company_Name.clear().sendKeys('SKB Builders');
      browser.sleep(500);
      licenseNumber.clear().sendKeys('12345');
      expect(licenseIssuedBy.isPresent()).toBe(true);
      browser.actions().mouseMove(licenseIssuedBy).perform();
      licenseIssuedBy.click();
      browser.executeScript('arguments[0].click();', licenseIssuedBy_Opt);
      browser.sleep(500);
      browser.wait(EC.elementToBeClickable(licenseIssueDate), 5000);
      licenseIssueDate.click();
      expect(container_calander.isPresent()).toBe(true);
      browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
      container_calander_btn.click();
      browser.wait(EC.elementToBeClickable(year), 5000);
      year.click();
      month_year.click();
      browser.sleep(500);
      month_day_year.click();
      browser.wait(EC.elementToBeClickable(licenseExpiryDate), 5000);
      licenseExpiryDate.click();
      expect(container_calander.isPresent()).toBe(true);
      browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
      container_calander_btn.click();
      browser.wait(EC.elementToBeClickable(year), 5000);
      licenseExpYear.click();
      browser.sleep(500);
      licenseExpmonth_year.click();
      browser.sleep(500);
      licenseExpmonth_day_year.click();
      browser.sleep(500);
      browser.wait(EC.elementToBeClickable(yearEstablishedDate), 5000);
      browser.executeScript('arguments[0].click();', yearEstablishedDate);
      browser.wait(EC.elementToBeClickable(container_calander_btn), 5000);
      container_calander_btn.click();
      browser.wait(EC.elementToBeClickable(year), 5000);
      year.click();
      month_year.click();
      browser.sleep(500);
      month_day_year.click();
      browser.sleep(500);
      Address.clear().sendKeys('SKB Builders');
      browser.sleep(500);
      expect(country.isPresent()).toBe(true);
      browser.actions().mouseMove(country).perform();
      country.click();
      browser.sleep(500);
      browser.executeScript('arguments[0].click();', country_Opt);
      browser.sleep(3000);
      browser.actions().mouseMove(city).perform();
       city.click();
       browser.sleep(7000);
       browser.executeScript('arguments[0].click();', city_Opt);
      browser.sleep(1000);
      // poBox.clear().sendKeys('1234');
      // browser.sleep(500);
      // Email1.clear().sendKeys('asd123@gmail.com');
      // browser.sleep(500);
      // expect(telephoneCode.isPresent()).toBe(true);
      // browser.actions().mouseMove(telephoneCode).perform();
      // telephoneCode.click();
      // browser.sleep(500);
      // browser.executeScript('arguments[0].click();', telephoneCode_input);
      // browser.sleep(500);
      // telephone.clear().sendKeys('7656576576');
      // browser.sleep(500);
      // browser.actions().mouseMove(FirstName).perform();
      // browser.wait(EC.elementToBeClickable(FirstName), 5000);
      // FirstName.clear().sendKeys('test');
      // browser.sleep(500);
      // browser.actions().mouseMove(LastName).perform();
      // browser.wait(EC.elementToBeClickable(LastName), 5000);
      // LastName.clear().sendKeys('user');
      // browser.sleep(500);
      // browser.wait(EC.elementToBeClickable(Nationality), 5000);
      // Nationality.click();
      // browser.sleep(500);
      // Nationality_Opt.click();





      // browser.executeScript('window.scrollTo(0,1000);').then(function () {
      //    expect(passport_upload.isPresent()).toBe(true);
      // });
      // // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
      // passport_upload.clear().sendKeys(passport_Path);
      // // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
      // idcard_upload.sendKeys(idcardPath);
      // browser.sleep(4000);
      // browser.executeScript('window.scrollTo(0,5000);').then(function () {
      //    expect(next_btn.isPresent()).toBe(true);

      //    browser.executeScript('arguments[0].click();', next_btn);
      // });
      

   }
   // this.openhouse = function () {
   //    browser.waitForAngularEnabled(false);
   //    browser.wait(EC.elementToBeClickable(openhousebutton), 5000);
   //    expect(openhousebutton.isPresent()).toBe(true);
   //    browser.executeScript('arguments[0].click();', openhousebutton);
   //    browser.sleep(2000);


   // };




};
module.exports = new BuyOC();
// let propertyElm1;
// let elm = element(by.cssContainingText('.property-info-detail', 'Baths'));
// let elm1 = element(by.cssContainingText('.property-info', 'Property ID: 42168'));
// let elm2 = element(by.cssContainingText('.property-info', 'Property ID: 42168'));
// let elm3 = element(by.cssContainingText('.upcomming-properties', 'Property ID : 42168')).element(by.css('.upcoming-pro-right'));
// let markasFavoriteClk = elm1.element(by.css('.markasFavorite'));
// let markasFavoriteClk0 = elm2.element(by.css('.markasFavorite'));