

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

(function () {

//News

var template = $('#news').html();
var render = _.template(template);

$.getJSON('https://json-data.herokuapp.com/restaurant/news/1').done(function (news){
	$('.news').append(render (news));
});

//Special

var template2 = $('#special').html();
var render2 = _.template(template2);

$.getJSON('https://json-data.herokuapp.com/restaurant/special/1').done(function (special){
	$('.special').append(render2 (special));
});



}());

( function () {
$('.tabs').on('click', 'li', function (event) {
  var newTab = $(this);
  newTab.siblings().addClass('showTab').removeClass('closeTab');
  newTab.parent().siblings().find(".showTab").removeClass('showTab').addClass('closeTab');
})

}());
