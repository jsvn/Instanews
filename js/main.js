$(function() {

    $('.select').on('change', function() {
    $('.navcontainer').addClass('container_small').removeClass('navcontainer');
    $('.logo').addClass('logo_small').removeClass('logo');
    // $('.select').addClass('select_sm').removeClass('select');

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
                      $( ".selectlist" ).empty();
              var $data = data.results.filter (function (item){
              return item.multimedia.length !== 0;
              }).splice(0, 12);
                // console.log(data);
                //do stuff with the data
                // console.log(data);
                // if (multimedia.length > 0) {


                $.each($data, function(item, value) {
                    var nytData = '';

                    nytData += '<li class="picture" style="background-image: url(' + value.multimedia[4].url + ')">';
                    nytData += '<a href="' + value.url + '"><div class="article-inner"></div></a>';
                    nytData +='<p class="abstract">' + value.abstract + '</p>' + '</li>';

                      console.log(nytData);
                      console.log(item, value);
                    $('.selectlist').append(nytData);

                    // console.log(value)
                });
            })
            .fail(function(err) {
                throw err;

            });
    })
})
