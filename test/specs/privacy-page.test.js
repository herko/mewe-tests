var PrivacyPage = require('../pageobjects/privacy.page');
var expect = require('chai').expect;

describe('MeWe.com Privacy Page', function(){

  it('should exist', function(){
    PrivacyPage.open();
    expect(PrivacyPage.status).to.equal('success');
  });

  it('should render Sign Up button', function(){
    PrivacyPage.open();
    expect(PrivacyPage.signUpButton).to.exist;
  });

});

