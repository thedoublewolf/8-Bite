
let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

let promise = $.getJSON(pubUrl);
promise.then( function (response) {
  console.log(response);
})