$(function() {

    $('.select').on('change', function() {
          $( '.loader' ).show();

        var userInput = $('.select').val();
        console.log(userInput);
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + userInput + '.json'
        url += '?' + $.param({
            'api-key': '3a2c9ea10b5e4ee99a1f1602314e16f0'
        });
        $.ajax({
                url: url,
                method: 'GET',
              })
              .done(function(data) {
              $( '.loader' ).hide();
              
              var $data = data.results.filter (function (item){
              return item.multimedia.length;
              }).splice(0, 12);
                // console.log(data);
                //do stuff with the data
                // console.log(data);
                // if (multimedia.length > 0) {
                $.each($data, function(item, value) {
                    var nytData = '';
                    nytData += value.abstract;
                    nytPicture = value.multimedia[4].url
                    nytData += '<li>' + '<img src=' + nytPicture + '/>' + '/>'>
                      console.log(nytData);
                      console.log(nytPicture);
                      console.log(item, value);
                    $(".selectlist").append(nytData);
                    // console.log(value)
                });
            })
            .fail(function(err) {
                throw err;

            });
    })
})
