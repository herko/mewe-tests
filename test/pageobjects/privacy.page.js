var Page = require('./prototype.page');
var PrivacyPage= Object.create(Page, {

  title: { get: function() {
    return browser.getTitle(); }
  },

  signUpButton: { get: function() {
    return browser.element('a=Sign Up For Freee!'); }
  },

  status: { get: function() {
    return browser.status().state; }
  },

  open: {
    value: function() {
      Page.open.call(this, '/privacy');
    }
  }
});

module.exports = PrivacyPage
