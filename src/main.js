

// Pulling down the restaurant menu

(function () {

let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

// Beer Items
let promise = $.getJSON(pubUrl);
promise.then( function (resp) {
  _.each(resp.Beer, function (item) {
  var itemHTML = loadTemplate(item);
  $('.beerList').append(itemHTML);
})
});

let loadTemplate = function (data) {
  let template = `
  <div class='menuItems beer'>
    <p class='title'>${data.item}</p><p class='price'>${data.price}</p>
  </div>
  <div class='menuDetails'>
    <p class='description'>${data.description}</p>
    <div class='vertical'></div>
    <p class='icons'>${data.allergies}${data.favorite}${data.bottle}${data.draught}</p>
  </div>
`;
$('.beerList').append(template);
}
}());

// Entree Items
(function () {

let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

let promise = $.getJSON(pubUrl);
promise.then( function (resp) {
  _.each(resp.entrees, function (item) {
  var itemHTML = loadTemplate(item);
  $('.entreeList').append(itemHTML);
})
});

let loadTemplate = function (data) {
  let template = `
  <div class='menuItems entrees'>
    <p class='title'>${data.item}</p><p class='price'>${data.price}</p>
  </div>
  <div class='menuDetails'>
    <p class='description'>${data.description}</p>
    <div class='vertical'></div>
    <p class='icons'>${data.allergies}${data.favorite}${data.spicy}${data.vegan}</p>
  </div>
`;
$('.entreeList').append(template);
}
}());

// Games, Games, Games
(function () {

let pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

let promise = $.getJSON(pubUrl);
promise.then( function (resp) {
  _.each(resp.games, function (item) {
  var itemHTML = loadTemplate(item);
  $('.gameList').append(itemHTML);
})
});

let loadTemplate = function (data) {
  let template = `
  <div class='menuItems games'>
    <p class='title'>${data.item}</p><p class='price'>${data.price}</p>
  </div>
  <div class='menuDetails'>
    <p class='description'>${data.description}</p>
    <div class='vertical'></div>
    <p class='icons'>${data.favorite}${data.online}${data.multiplayer}${data.rating}${data.platform}</p>
  </div>
`;
$('.gameList').append(template);
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

$('.header1').on('click', function (){
    $('#tab1').removeClass('close').addClass('open');
    $('#tab2').removeClass('open').addClass('close');
    $('#tab3').removeClass('open').addClass('close');
    $('#tab4').removeClass('open').addClass('close');
});

$('.header2').on('click', function (){
    $('#tab2').removeClass('close').addClass('open');
    $('#tab3').removeClass('open').addClass('close');
    $('#tab1').removeClass('open').addClass('close');
    $('#tab4').removeClass('open').addClass('close');
});

$('.header3').on('click', function (){
    $('#tab3').removeClass('close').addClass('open');
    $('#tab2').removeClass('open').addClass('close');
    $('#tab1').removeClass('open').addClass('close');
    $('#tab4').removeClass('open').addClass('close');
}); 
$('.header4').on('click', function (){
    $('#tab4').removeClass('close').addClass('open');
    $('#tab2').removeClass('open').addClass('close');
    $('#tab1').removeClass('open').addClass('close');
    $('#tab3').removeClass('open').addClass('close');
}); 

$('.header1').on('click', function (){
    $('.header1').removeClass('noBorder').addClass('showBorder');
    $('.header2').removeClass('showBorder').addClass('noBorder');
    $('.header3').removeClass('showBorder').addClass('noBorder');
    $('.header4').removeClass('showBorder').addClass('noBorder');

  });

$('.header2').on('click', function (){
    $('.header1').removeClass('showBorder').addClass('noBorder');
    $('.header2').removeClass('noBorder').addClass('showBorder');
    $('.header3').removeClass('showBorder').addClass('noBorder');
    $('.header4').removeClass('showBorder').addClass('noBorder');

  });

$('.header3').on('click', function (){
    $('.header1').removeClass('showBorder').addClass('noBorder');
    $('.header2').removeClass('showBorder').addClass('noBorder');
    $('.header3').removeClass('noBorder').addClass('showBorder');
    $('.header4').removeClass('showBorder').addClass('noBorder');

  });

$('.header4').on('click', function (){
    $('.header1').removeClass('showBorder').addClass('noBorder');
    $('.header2').removeClass('showBorder').addClass('noBorder');
    $('.header3').removeClass('showBorder').addClass('noBorder');
    $('.header4').removeClass('noBorder').addClass('showBorder');

  });
