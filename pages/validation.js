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
}