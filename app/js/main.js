'use strict';

var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

var promise = $.getJSON(pubUrl);
promise.then(function (response) {
  console.log(response);
});