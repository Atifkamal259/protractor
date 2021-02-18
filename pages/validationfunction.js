
let Registeration = function () {
this.validcheck = function(field, inputdirty, inputclean){
    field.clear().sendKeys(inputdirty);
    expect(field.getAttribute('class')).toMatch('ng-invalid');
    expect(field.getAttribute('class')).toMatch('ng-dirty');
    console.log('wrong input');
    field.clear().sendKeys(inputclean);
    expect(field.getAttribute('class')).toMatch('ng-invalid');
    expect(field.getAttribute('class')).toMatch('ng-dirty');
    console.log('valid input');
};
this.verifyResult = function(result){
    let output =  element(by.cssContainingText('.ng-binding', result));
    expect(output.getText()).toEqual(result);
};
this.gettext = async () => {
    let post_count = element.all(by.css('.propertyId')).get(0);
       let mytext = await post_count.element(by.css('h6')).getText();
          console.log('mytext_outside_function = ' + mytext);
};
};
