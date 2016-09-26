var IndexPage = require('../pageobjects/index.page');
var expect = require('chai').expect;

describe('MeWe.com Index Page', function(){
  
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
      IndexPage.emailPhone.setValue('john@doe.sk');
      IndexPage.emailPhoneRepeat.setValue('john@doe.sk');
      IndexPage.password.setValue('Som3Secr3T');
      IndexPage.userAge.setValue('12');

      browser.element('#submit-registration').click();

      expect(IndexPage.getUrl).to.not.equal('https://mewe.com/welcome#');
    });

  });

});

