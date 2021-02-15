/*************owner detail page**************/
passport_no =   element(by.name('passportNo'));
passport_input =   element(by.css('input[name="passportNo"]'));
Passport_exp_date =   element(by.css('input[name="passportExpiryDate"]'));
container_calander =   element(by.css('.owl-dt-container'));
container_calander_btn =   element(by.css('.owl-dt-control-period-button'));
year =   element(by.css('[aria-label="2026"]'));
month_year =   element(by.css('[aria-label="August 2026"]')).click();
month_day_year = element(by.css('[aria-label="August 27; 2026"]'));
idCard_no =   element(by.name('idCardNo'));
idCard_input =   element(by.css('input[name="idCardNo"]')).clear().sendKeys('34578391');
idCard_exp_date =   element(by.css('input[name="idCardExpiration"]'));
passport_upload =   element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[1]/app-upload-file/div/input'));
idcard_upload =   element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-owner/div/app-owner-base-form/form/div[3]/div/div[2]/div[2]/app-upload-file/div/input'));
passport_Path = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Passport.jpg";
idcardPath = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\download (2).jpg";
next_btn =   element(by.buttonText('Next'));
/*************Attorny Details Page**************/
poaStatus =   element(by.id('poaStatus'));
No =   element(by.cssContainingText('.ng-option-label', 'No'));
/*************Property Detail page**************/
propertyStatus =   element(by.name('propertyStatus'));
propertyStatus_Opt =   element(by.cssContainingText('.ng-option-label', 'Completed'));
titleDeedNo =   element(by.name('titleDeedNo'));
typeArea =   element(by.name('typeArea'));
typrArea_type =   element(by.cssContainingText('.ng-option-label', 'Freehold'));
propertyType =   element(by.name('propertyType'));
propertyType_Opt =   element(by.cssContainingText('.ng-option-label', 'Villa'));
projectName =   element(by.name('projectName'));
bulidingName =   element(by.name('bulidingName'));
netArea =   element(by.name('netArea'));
netAreaUnit =   element(by.name('netAreaUnit'));
netAreaUnit_Opt =   element(by.cssContainingText('.ng-option-label', 'sqft'));
address =   element(by.name('address'));
city =   element(by.name('city'));
city_Opt =   element(by.cssContainingText('.ng-option-label', 'Sharjah'));
mapLocation =   element(by.name('mapLocation'));
developerName=  element(by.name('developerName'));
presentUse =   element(by.name('presentUse'));
presentUse_Opt =   element(by.cssContainingText('.ng-option-label', 'Residential'));
noOfBedrooms =   element(by.name('noOfBedrooms'));
noOfBaths =   element(by.name('noOfBaths'));
carParks =   element(by.name('carParks'));
kitchens =   element(by.name('kitchens'));
propertyDes =   element(by.name('propertyDes'));
propertyDes_text =   element(by.css('.ngx-editor-textarea'));
Titledeed_upload =   element(by.css('.custom-file-input'));
Titledeed_path = "C=\\Users\\HP\\Desktop\\old_chiragh\\Newfolder\\Scanned Title Deed.jpg";
property_upload =   element(by.xpath('/html/body/app-root/app-core/app-sell/div/div/app-property-detail/form/div[7]/div[2]/div[2]/div/div/input'));
var image1 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\292968_16012118210039308812.jpg';
var image2 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\1554785546553-9.jpg';
var image3 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\5ecb4470.jpg';
var image4 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\49836-1.jpg';
var image5 = 'C:\\Users\\HP\\Desktop\\old_chiragh\\Property images\\116268755.jpg';
property_image_path = 'image1'+ "\n" + 'image2' + "\n" + 'image3' + "\n" + 'image4'+ "\n" + 'image5';
/*************Mortgage page**************/
mortgageStatus =   element(by.name('mortgageStatus'));
/*************Rent page**************/
isRented =   element(by.name('isRented'));
/*************Valuation page**************/
independentValuation =   element(by.name('independentValuation'));
thirdparty_company =   element(by.cssContainingText('.companyNameUrl', 'JLL')).  element(by.xpath('following-sibling==div'));
agree_checkbox1 =   element(by.id('customControlIn_line'));
PayNow_btn =   element(by.buttonText('Pay Now'));
/*************Popup window**************/
payNow_checkbox =   element(by.id('exampleRadios1'));
Submit_btn =   element(by.buttonText('Submit'));
/*************Done page**************/
done_thanks =   element(by.css('.done-thanks'));