$(function() {

$( ".select" ).change(function() {


var userInput = $( ".sections" ).val();

console.log(userInput);

var url = 'https://api.nytimes.com/svc/topstories/v2/' + userInput + '.json'
url += '?' + $.param({
  'api-key': "3a2c9ea10b5e4ee99a1f1602314e16f0"
});
$.ajax({
  url: url,
  method: 'GET',
});

.done(function(data) {
  console.log(data);
//do stuff with the data


              console.log(data);
              $.each(data.results, function(key, value) {
                var nytData = '';
                  nytData += vale.abstract;
                  nytData += '<img src="' + value.multimedia[4].url + '">'
$userInput.append(nytData);

});

.fail(function() {
$userInput.append('<li>Something went wrong....</li>');

  });
  event.preventDefault();},
    });

});
});
