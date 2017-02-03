$(function() {

    var $selectBox = $(' .select ');
    var $navContainer = $( '.navcontainer' );
    var $logo = $( '.logo' );
    var $navBar = $( '.nav' );
    var $loaderImage = $( '.loader' );
    var $selectList = $( '.selectlist' );

    $selectBox.on('change', function() {
    $navContainer.addClass('container_small').removeClass('navcontainer');
    $logo.addClass('logo_small').removeClass('logo');
    $navBar.addClass('nav_small').removeClass('nav');

    $loaderImage.show();

    var userInput = $selectBox.val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + userInput + '.json';
        url += '?' + $.param({
          'api-key': '3a2c9ea10b5e4ee99a1f1602314e16f0'
        });
        $.ajax({
            url: url,
            method: 'GET',
          }).done(function(data) {
              $loaderImage.hide();
              $selectList.empty();
              
              var $data = data.results.filter (function (item){
              
              return item.multimedia.length !== 0;
              
              }).splice(0, 12);

              $.each($data, function(item, value) {
                var nytData = '';

                nytData += '<li class="picture" style="background-image: url(' + value.multimedia[4].url + ')">';
                nytData += '<a href="' + value.url + '"><div class="article-inner"></div></a>';
                nytData +='<p class="abstract">' + value.abstract + '</p>' + '</li>';

                $selectList.append(nytData);
              });
          }).fail(function(err) {
              throw err;
          });
    });
});
