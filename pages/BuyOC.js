let BuyOC = function () {

// browser.waitForAngularEnabled(false);
let Buy_btn = element(by.xpath('/html/body/app-root/app-core/app-header/header/div/div/nav/div/div/ul/li[2]/a'));
let EC = protractor.ExpectedConditions;
let ViewAll_btn = element(by.buttonText('View All'));
let CurrentInvestment = element(by.cssContainingText('.col-12', 'Current investment opportunities'));
let UpcommingAuction = element(by.cssContainingText('.upcomming-auction', 'Upcoming investment opportunities'));
let elm= element(by.cssContainingText('.property-info-detail','Baths'));
this.currentInvestmentOp = function() {
    browser.wait(EC.elementToBeClickable(CurrentInvestment), 5000);
    browser.executeScript('window.scrollTo(0,450)').then(function () {
        expect(CurrentInvestment.isPresent()).toBe(true)});
        browser.sleep(4000);

 };
 this.UpcommingAuctionOp = function(){
    
    browser.wait(EC.elementToBeClickable(UpcommingAuction), 5000);
    browser.executeScript('window.scrollTo(0,1500)').then(function () {
    expect(CurrentInvestment.isPresent()).toBe(true)});
    browser.sleep(4000);

 };
 this.viewAll= function(){
    browser.executeScript('window.scrollTo(0,1200)').then(function () {
    expect(ViewAll_btn.isPresent()).toBe(true)});
    browser.sleep(2000);
    ViewAll_btn.click();
    browser.sleep(2000);
    browser.executeScript('window.scrollTo(0,300)').then(function () {
    expect(elm.isPresent()).toBe(true)});
    browser.sleep(3000);
 };
 this.BuyBtn= function(){
    
    Buy_btn.click();
    browser.executeScript('window.scrollTo(0,300)').then(function () {
    expect(Buy_btn.isPresent()).toBe(true)});
        browser.sleep(4000);
 };
 


};
module.exports = new BuyOC();