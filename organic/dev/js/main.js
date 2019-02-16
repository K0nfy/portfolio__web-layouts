// sliders initialize
$(document).ready(function(){
  $('.first-slider').slick({
    prevArrow: '<div class="slider__arrow slider__arrow--prev"><</div>',
    nextArrow: '<div class="slider__arrow slider__arrow--next">></div>',
    asNavFor: $('.second-slider'),
    fade: true,
    infinite: false
  });

});
$(document).ready(function(){
  $('.second-slider').slick({
    arrows: false,
    asNavFor: $('.first-slider'),
    fade: true,
    infinite: false
  });
});


// links preventDefault
addEventListener("load", function() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
      e.preventDefault();
    });
  }
});


// menu button
$('.menu-button--open')
  .parents('.menu-button-container--green')
  .bind('click', function() {
    $('.main-nav').css('marginRight', '0');
    // $('body').css('overflow', 'hidden');
});

$('.menu-button--close').bind('click', function() {
  $('.main-nav').css('marginRight', '');
  // $('body').css('overflow', '');
});
