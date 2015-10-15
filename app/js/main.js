<<<<<<< HEAD
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
})();
=======
"use strict";
>>>>>>> bdc02aa1672b759d487d93bb9b463efc391cea11
