  function initMap() {

    var locations = [
       ['Zhuhai, China', 22.2709, 113.576, 18],
       ['Hong Kong', 22.396, 114.109, 17],
       ['Prague, Czech Republic', 50.075, 14.4378, 16],
       ['Budapest, Hungary', 47.497, 19.040, 15],
       ['Munich, Germany', 48.135, 11.5819, 14],
       ['Berlin, Germany', 52.520, 13.404, 13],
       ['Algarve, Portugal', 37.017, -7.9308, 12],
       ['Lisbon, Portugal', 38.722, -9.1393, 11],
       ['LA, CA', 34.052, -118.2436, 10],
       ['Raleigh, NC', 35.779, -78.638, 9],
       ['Huntsville, AL', 34.730, -86.586, 9],
       ['Miami, FL', 25.7616, -80.1917, 8],
       ['Dallas, TX', 32.7766, -96.7969, 7],
       ['Nashvile, TN', 36.1626638, -86.7816, 6],
       ['Atlanta, GA', 33.7489, -84.3879, 5],
       ['Yosemite National, CA', 37.739727, -119.564733, 4],
       ['Portland, OR', 45.52306, -122.6764, 5],
       ['San Fransisco, CA', 37.77492, -122.41941, 3],
       ['New York, NY', 40.7217, -74.00, 2],
       ['New Jersey', 40.735, -74.1723, 1]
     ];


     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 3,
       center: new google.maps.LatLng(34.59, -27.68),
       mapTypeId: google.maps.MapTypeId.ROADMAP
     });

     var infowindow = new google.maps.InfoWindow();

     var marker, i;

     for (i = 0; i < locations.length; i++) {
       marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
         map: map
       });

       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
           infowindow.setContent(locations[i][0]);
           infowindow.open(map, marker);
         }
       })(marker, i));
     }
  }
  $(document).ready(function() {
    $('.youtube').fancybox();
    $('.youtubea').fancybox();
  });

  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var divoffset = $('.p-container').offset().top;
    var pScroll = (divoffset - wScroll);

    $('.logo').css({
      'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.me').css({
      'transform': 'translate(0px, ' + wScroll / 16 + '%)'
    });

    if (wScroll > $('.ee-box').offset().top - ($(window).height() / 1.5)) {
      $('.Float-in').eq(0).addClass('is-showing');
    };
    if (wScroll > $('.ee-box').offset().top - ($(window).height() / 3)) {
      $('.Float-in').eq(1).addClass('is-showing');
    };
    if (wScroll > $('.ee-box').offset().top - ($(window).height() / 6)) {
      $('.Float-in').eq(2).addClass('is-showing');
    };
    if (wScroll > $('.ee-box').offset().top - ($(window).height() / 10)) {
      $('.Float-in').eq(3).addClass('is-showing');
    };

    if (pScroll < wScroll / 2) {

      $('.Float-in-pics').each(function(i) {

        setTimeout(function() {
          $('.Float-in-pics').eq(i).addClass('is-showing');
        }, 150 * (i + 1));
      })
    };
  })
