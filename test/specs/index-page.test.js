var IndexPage = require('../pageobjects/index.page');
var expect = require('chai').expect;

describe('MeWe.com Index Page', function(){
  before(function(){
    browser.windowHandleSize({ width: 1024, height: 768 });
  });
  
  it('should exist', function(){
    IndexPage.open();
    expect(IndexPage.status).to.equal('success');
  });

  describe('User Sign Up Form', function(){

    it('should display warning message if age is under 13', function(){
      IndexPage.open();
      IndexPage.userAge.setValue('12');
      expect(IndexPage.isVisible(IndexPage.ageError)).to.be.true;  
    });

    it('should display terms dialog after click on Terms link', function(){
      IndexPage.open();
      IndexPage.termsLink.click();

      expect(IndexPage.isVisible(IndexPage.termsDialog)).to.be.true;
    });

    it('should fail registration if age is under 13', function(){

      IndexPage.open();
      IndexPage.firstName.setValue('John');
      IndexPage.lastName.setValue('Doe');
      IndexPage.emailPhone.setValue('john32@doe.sk');
      IndexPage.emailPhoneRepeat.setValue('john32@doe.sk');
      IndexPage.password.setValue('Som3Secr3T');
      IndexPage.userAge.setValue('12'); // if changed to >= 13, test fails

      IndexPage.submitButton.click();
      browser.pause(3000);

      expect(IndexPage.getUrl).to.not.contain('welcome');
    });

  });

});

