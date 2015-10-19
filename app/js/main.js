

// Pulling down the restaurant menu

'use strict';

(function () {

  var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

  // Beer Items
  var promise = $.getJSON(pubUrl);
  promise.then(function (resp) {
    _.each(resp.Beer, function (item) {
      var itemHTML = loadTemplate(item);
      $('.beerList').append(itemHTML);
    });
  });

  var loadTemplate = function loadTemplate(data) {
    var template = '\n  <div class=\'menuItems beer\'>\n    <p class=\'title\'>' + data.item + '</p><p class=\'price\'>' + data.price + '</p>\n  </div>\n  <div class=\'menuDetails\'>\n    <p class=\'description\'>' + data.description + '</p>\n    <div class=\'vertical\'></div>\n    <p class=\'icons\'><img src=\'images/allergies.png\' width=\'20px\' height=\'20px\'' + data.allergies + '><img src=\'images/favorite.png\' width=\'20px\' height=\'20px\'' + data.favorite + '><img src=\'images/bottle.png\' width=\'20px\' height=\'20px\'' + data.bottle + '><img src=\'images/draught.png\' width=\'20px\' height=\'20px\'' + data.draught + '></p>\n  </div>\n';
    $('.beerList').append(template);
  };
})();

// Entree Items
(function () {

  var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

  var promise = $.getJSON(pubUrl);
  promise.then(function (resp) {
    _.each(resp.entrees, function (item) {
      var itemHTML = loadTemplate(item);
      $('.entreeList').append(itemHTML);
    });
  });

  var loadTemplate = function loadTemplate(data) {
    var template = '\n  <div class=\'menuItems entrees\'>\n    <p class=\'title\'>' + data.item + '</p><p class=\'price\'>' + data.price + '</p>\n  </div>\n  <div class=\'menuDetails\'>\n    <p class=\'description\'>' + data.description + '</p>\n    <div class=\'vertical\'></div>\n    <p class=\'icons\'><img src=\'images/allergies.png\' width=\'20px\' height=\'20px\'' + data.allergies + '><img src=\'images/favorite.png\' width=\'20px\' height=\'20px\'' + data.favorite + '><img src=\'images/spicy.png\' width=\'20px\' height=\'20px\'' + data.spicy + '><img src=\'images/vegan.png\' width=\'20px\' height=\'20px\'' + data.vegan + '></p>\n  </div>\n';
    $('.entreeList').append(template);
  };
})();

// Games, Games, Games
(function () {

  var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

  var promise = $.getJSON(pubUrl);
  promise.then(function (resp) {
    _.each(resp.games, function (item) {
      var itemHTML = loadTemplate(item);
      $('.gameList').append(itemHTML);
    });
  });

  var loadTemplate = function loadTemplate(data) {
    var template = '\n  <div class=\'menuItems games\'>\n    <p class=\'title\'>' + data.item + '</p><p class=\'price\'>' + data.price + '</p>\n  </div>\n  <div class=\'menuDetails\'>\n    <p class=\'description\'>' + data.description + '</p>\n    <div class=\'vertical\'></div>\n    <p class=\'icons\'><img src=\'images/favorite.png\' width=\'20px\' height=\'20px\'' + data.favorite + '><img src=\'images/online.png\' width=\'20px\' height=\'20px\'' + data.online + '><img src=\'images/multiplayer.png\' width=\'20px\' height=\'20px\'' + data.multiplayer + '><img src=\'images/rating.png\' width=\'20px\' height=\'20px\'' + data.rating + '><img src=\'images/platform.png\' width=\'20px\' height=\'20px\'' + data.platform + '></p>\n  </div>\n';
    $('.gameList').append(template);
  };
})();

(function () {

  //News

  var templateNews = $('#news').html();
  var render = _.template(templateNews);

  $.getJSON('https://json-data.herokuapp.com/restaurant/news/1').done(function (news) {
    $('.news').append(render(news));
  });

  // Special

  var specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';
  var menuURL = 'https://json-data.herokuapp.com/restaurant/menu/3';

  var specialPromise = $.getJSON(specialURL);
  var menuPromise = $.getJSON(menuURL);

  var arrMenu = [];
  var specialId;
  var specialMenuItem = {};

  specialPromise.then(function (specialObject) {

    specialId = specialObject.menu_item_id;
    return specialId;
  });

  menuPromise.then(function (menuObject) {

    Object.keys(menuObject).forEach(function (key) {
      arrMenu = arrMenu.concat(menuObject[key]);
    });

    specialMenuItem = _.findWhere(arrMenu, { id: specialId });

    var specialBlock = '\n  <div class="specialGroup"><p class="specialItem">' + specialMenuItem.item + '</p>\n  <p class="specialPrice">' + specialMenuItem.price + '</p></div>\n  <p class="specialDescr">' + specialMenuItem.description + '</p>';

    $('.special').append(specialBlock);
  });

  // var menuSpecial = $('#special').html();
  // var renderSpecial = _.template(menuSpecial);

  // $.getJSON('https://json-data.herokuapp.com/restaurant/special/1').done(function (special){
  // 	$('.special').append(renderSpecial (special));
  //   console.log(special);
  // });
})();

$('.header1').on('click', function () {
  $('#tab1').removeClass('close').addClass('open');
  $('#tab2').removeClass('open').addClass('close');
  $('#tab3').removeClass('open').addClass('close');
  $('#tab4').removeClass('open').addClass('close');
});

$('.header2').on('click', function () {
  $('#tab2').removeClass('close').addClass('open');
  $('#tab3').removeClass('open').addClass('close');
  $('#tab1').removeClass('open').addClass('close');
  $('#tab4').removeClass('open').addClass('close');
});

$('.header3').on('click', function () {
  $('#tab3').removeClass('close').addClass('open');
  $('#tab2').removeClass('open').addClass('close');
  $('#tab1').removeClass('open').addClass('close');
  $('#tab4').removeClass('open').addClass('close');
});
$('.header4').on('click', function () {
  $('#tab4').removeClass('close').addClass('open');
  $('#tab2').removeClass('open').addClass('close');
  $('#tab1').removeClass('open').addClass('close');
  $('#tab3').removeClass('open').addClass('close');
});

$('.header1').on('click', function () {
  $('.header1').removeClass('noBorder').addClass('showBorder');
  $('.header2').removeClass('showBorder').addClass('noBorder');
  $('.header3').removeClass('showBorder').addClass('noBorder');
  $('.header4').removeClass('showBorder').addClass('noBorder');
  $('.header5').removeClass('showBorder').addClass('noBorder');
});

$('.header2').on('click', function () {
  $('.header1').removeClass('showBorder').addClass('noBorder');
  $('.header2').removeClass('noBorder').addClass('showBorder');
  $('.header3').removeClass('showBorder').addClass('noBorder');
  $('.header4').removeClass('showBorder').addClass('noBorder');
  $('.header5').removeClass('showBorder').addClass('noBorder');
});

$('.header3').on('click', function () {
  $('.header1').removeClass('showBorder').addClass('noBorder');
  $('.header2').removeClass('showBorder').addClass('noBorder');
  $('.header3').removeClass('noBorder').addClass('showBorder');
  $('.header4').removeClass('showBorder').addClass('noBorder');
  $('.header5').removeClass('showBorder').addClass('noBorder');
});

$('.header4').on('click', function () {
  $('.header1').removeClass('showBorder').addClass('noBorder');
  $('.header2').removeClass('showBorder').addClass('noBorder');
  $('.header3').removeClass('showBorder').addClass('noBorder');
  $('.header4').removeClass('noBorder').addClass('showBorder');
  $('.header5').removeClass('showBorder').addClass('noBorder');
});