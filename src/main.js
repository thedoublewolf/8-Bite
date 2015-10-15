
// Pulling down the restaurant menu

(function () {

let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

// Beer Items
let promise = $.getJSON(pubUrl);
promise.then( function (resp) {
  _.each(resp.Beer, function (item) {
  var itemHTML = loadTemplate(item);
  $('.menu').append(itemHTML);
})
});

let loadTemplate = function (data) {
  let template = `
 <div class='beer'>
    <p>${data.item}${data.price}</p>
    <p>${data.description}${data.allergies}${data.favorite}${data.bottle}${data.draught}</p>
 </div>
`;
$('.menu').append(template);
}
}());

// Entree Items
(function () {

let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

let promise = $.getJSON(pubUrl);
promise.then( function (resp) {
  _.each(resp.entrees, function (item) {
  var itemHTML = loadTemplate(item);
  $('.menu').append(itemHTML);
})
});

let loadTemplate = function (data) {
  let template = `
 <div class='entrees'>
    <p>${data.item}${data.price}</p>
    <p>${data.description}${data.allergies}${data.favorite}${data.spicy}${data.vegan}</p>
 </div>
`;
console.log(template)
$('.menu').append(template);
}
}());

// Games, Games, Games
(function () {

let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

let promise = $.getJSON(pubUrl);
promise.then( function (resp) {
  _.each(resp.games, function (item) {
  var itemHTML = loadTemplate(item);
  $('.menu').append(itemHTML);
})
});

let loadTemplate = function (data) {
  let template = `
 <div class='games'>
    <p>${data.item}${data.price}</p>
    <p>${data.description}${data.favorite}${data.online}${data.multiplayer}${data.rating}${data.platform}</p>
 </div>
`;
console.log(template);
$('.menu').append(template);
}
}());
