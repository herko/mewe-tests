var Page = require('./prototype.page');
var IndexPage= Object.create(Page, {
  // page title
  title: { get: function() {
    return browser.getTitle(); }
  },

  // form inputs
  firstName: { get: function() {
    return browser.element('#reg-first-filled'); }
  },
  lastName: { get: function() {
    return browser.element('#reg-last-filled'); }
  },
  emailPhone: { get: function() {
    return browser.element('#reg-email-phone-filled'); }
  },
  emailPhoneRepeat: { get: function() {
    return browser.element('#reg-email-phone-filled-repeat'); }
  },
  password: { get: function() {
    return browser.element('#reg-password-filled'); }
  },
  userAge: { get: function() {
    return browser.element('#reg-user-age'); }
  },
  submitButton: { get: function() {
    return browser.element("#submit-registration"); }
  },

  // error container
  ageError: { get: function() {
    return '#age-law-err'; }
  },

  // hrefs
  termsLink: { get: function() {
    return browser.element('#terms-of-service'); }
  },

  // elements
  termsDialog: { get: function() {
    return '#terms-dialog'; }
  },

  // utilities
  status: { get: function() {
    return browser.status().state; }
  },

  getUrl: { get: function() {
    return browser.getUrl(); }
  },

  open: {
    value: function() {
      Page.open.call(this, '');
    }
  },

  isVisible: {
    value: function(element) {
      return browser.isVisible(element);
    }
  }
});

module.exports = IndexPage
