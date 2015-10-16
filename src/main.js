

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
$('.menu').append(template);
}
}());

(function () {

//News

var templateNews = $('#news').html();
var render = _.template(templateNews);

$.getJSON('https://json-data.herokuapp.com/restaurant/news/1').done(function (news){
	$('.news').append(render (news));
});

// Special

var specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';
var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

var specialPromise = $.getJSON(specialURL);
var menuPromise = $.getJSON(menuURL);

var arrMenu = [];
var specialId;
var specialMenuItem = {};

specialPromise.then( function (specialObject){

  specialId = specialObject.menu_item_id;
  return specialId;
});

menuPromise.then( function(menuObject){

  Object.keys(menuObject).forEach(function(key) {
    arrMenu = arrMenu.concat(menuObject[key]);
  });

  specialMenuItem = _.findWhere(arrMenu, {id: specialId });

  let specialBlock = `
  <p>${ specialMenuItem.item }</p>
  <p>${ specialMenuItem.price }</p>
  <p>${ specialMenuItem.description }</p>`;

  $('.special').append(specialBlock);

});



// var menuSpecial = $('#special').html();
// var renderSpecial = _.template(menuSpecial);

// $.getJSON('https://json-data.herokuapp.com/restaurant/special/1').done(function (special){
// 	$('.special').append(renderSpecial (special));
//   console.log(special);
// });

}());


