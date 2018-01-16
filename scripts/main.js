$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });
   $('.me').css({
    'transform' : 'translate(0px, '+ wScroll  /16 +'%)'
  });

if(wScroll > $('.ee-box').offset().top - ($(window).height() / 1.5)){
$('.Float-in').eq(0).addClass('is-showing');
}
if(wScroll > $('.ee-box').offset().top - ($(window).height() / 3)){
$('.Float-in').eq(1).addClass('is-showing');
}
if(wScroll > $('.ee-box').offset().top - ($(window).height() / 6)){
$('.Float-in').eq(2).addClass('is-showing');
}
if(wScroll > $('.ee-box').offset().top - ($(window).height() / 10)){
$('.Float-in').eq(3).addClass('is-showing');
}
})
