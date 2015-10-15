
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
    console.log(template);
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
    console.log(template);
    $('.menu').append(template);
  };
})();