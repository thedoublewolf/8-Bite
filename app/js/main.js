<<<<<<< HEAD

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
=======
'use strict';

(function () {

	//News

	var template = $('#news').html();
	var render = _.template(template);

	$.getJSON('https://json-data.herokuapp.com/restaurant/news/1').done(function (news) {
		$('.news').append(render(news));
	});

	//Special

	var template2 = $('#special').html();
	var render2 = _.template(template2);

	$.getJSON('https://json-data.herokuapp.com/restaurant/special/1').done(function (special) {
		$('.special').append(render2(special));
	});

	//Menu

	// var templateMenu = $('#menu').html();
	// var renderMenu = _.template(templateMenu);

	// $.getJSON('https://json-data.herokuapp.com/restaurant/menu/3').then(function (menu){
	// 	// $('.menu').append(renderMenu (menu));
	// 	console.log(menu.Beer);
	// 	_.each(menu.Beer, function (beerItem){
	// 		var beerItemHTML = renderMenu(beerItem);
	// 		$('.menu').append(itemHTML);
	// 		console.log(itemHTML);
	// 	})
	// });
>>>>>>> e313bf51123b7acca90c1c493c8cae233baa3cfd
})();