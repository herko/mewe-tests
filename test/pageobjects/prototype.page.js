function Page() {
  this.title = 'MeWe.Com';
}

Page.prototype.open = function(path){
  browser.url('/' + path);
}

module.exports = new Page();
