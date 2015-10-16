

// Pulling down the restaurant menu

'use strict';

(function () {

  var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

  // Beer Items
  var promise = $.getJSON(pubUrl);
  promise.then(function (resp) {
    _.each(resp.Beer, function (item) {
      var itemHTML = loadTemplate(item);
      $('.menu').append(itemHTML);
    });
  });

  var loadTemplate = function loadTemplate(data) {
    var template = '\n <div class=\'beer\'>\n    <p>' + data.item + data.price + '</p>\n    <p>' + data.description + data.allergies + data.favorite + data.bottle + data.draught + '</p>\n </div>\n';
    $('.menu').append(template);
  };
})();

// Entree Items
(function () {

  var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

  var promise = $.getJSON(pubUrl);
  promise.then(function (resp) {
    _.each(resp.entrees, function (item) {
      var itemHTML = loadTemplate(item);
      $('.menu').append(itemHTML);
    });
  });

  var loadTemplate = function loadTemplate(data) {
    var template = '\n <div class=\'entrees\'>\n    <p>' + data.item + data.price + '</p>\n    <p>' + data.description + data.allergies + data.favorite + data.spicy + data.vegan + '</p>\n </div>\n';
    $('.menu').append(template);
  };
})();

// Games, Games, Games
(function () {

  var pubUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';

  var promise = $.getJSON(pubUrl);
  promise.then(function (resp) {
    _.each(resp.games, function (item) {
      var itemHTML = loadTemplate(item);
      $('.menu').append(itemHTML);
    });
  });

  var loadTemplate = function loadTemplate(data) {
    var template = '\n <div class=\'games\'>\n    <p>' + data.item + data.price + '</p>\n    <p>' + data.description + data.favorite + data.online + data.multiplayer + data.rating + data.platform + '</p>\n </div>\n';
    $('.menu').append(template);
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

    var specialBlock = '\n  <p>' + specialMenuItem.item + '</p>\n  <p>' + specialMenuItem.price + '</p>\n  <p>' + specialMenuItem.description + '</p>';

    $('.special').append(specialBlock);
  });

  // var menuSpecial = $('#special').html();
  // var renderSpecial = _.template(menuSpecial);

  // $.getJSON('https://json-data.herokuapp.com/restaurant/special/1').done(function (special){
  // 	$('.special').append(renderSpecial (special));
  //   console.log(special);
  // });
})();