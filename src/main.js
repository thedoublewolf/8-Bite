(function () {

  /*let googleMapsURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: googleMapsURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
   var templateString = $('#item-template').text();
  var renderTemplate = _.template(templateString);
    _.each(response.results, function(item) {
      var freshHTML = renderTemplate(item);
      $('.location').append(freshHTML);
//var template = $('#item-template').html();
//var render = _.template(template);

// $.getJSON('etsyURL').done( function (item) {
//  $('.container').append( render(item) );*/

}());
