"use strict";

(function(open) {
  XMLHttpRequest.prototype.open = function(_args_) {
    this.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log('X-Foo = ' + this.getResponseHeader('X-Foo'))
      }
    }, false);
    open.apply(this, arguments);
  };
})(XMLHttpRequest.prototype.open);

console.log('xhr.js')
