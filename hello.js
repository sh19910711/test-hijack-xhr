"use strict";

function request(type, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(type, url);
  xhr.onload = function() {
    callback(xhr)
  };
  xhr.send(null);
}

var get = request.bind(this, 'GET');
var post = request.bind(this, 'POST');

console.log('get: foo.php')
get('custom-header-foo.php', function() {
  console.log('get-callback', arguments);
});
