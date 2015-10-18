(function () {

// Flickr API Key: 56d9a62afb8167b582f1fbc74496f12c

// Flickr Secret: b7726e68d7696fa8

// Declare Flickr URL with API Key 
var flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0b3fba2c4089dd3a68757b15128579af&tags=pub+food&format=json&nojsoncallback=1&auth_token=72157659954306922-036adcb36e5388ea&api_sig=6b4a4d13c19e6f152bf4907809d30688';

// Get array of photos from Flicker API via json
$.ajax({
  url: flickrURL,
  dataType: 'json',
  method: 'get'
  // Call response
}).then (function (response) {
  // Declare templateString variable and assign to foodPics ID
   var templateString = $('#foodPics').text();
  // Declare renderTemplate variable and assign to _.template() function
  var renderTemplate = _.template(templateString);
  // Iterate through array and pull
    _.each(response.photos, function(pubShots) {
      var freshHTML = renderTemplate(pubShots);
      $('.foodPhotos').append(freshHTML);
    }
 });
}());