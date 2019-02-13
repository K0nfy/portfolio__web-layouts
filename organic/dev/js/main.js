// sliders options

var firstSwiper = new Swiper ('.first-slider', {
  loop: false,
  spaceBetween: 300,
  followFinger: false,
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
    disabledClass: 'slider__arrow--disabled'
  }
});
var secondSwiper = new Swiper ('.second-slider', {
  loop: false,
  spaceBetween: 300
});
firstSwiper.controller.control = secondSwiper;
secondSwiper.controller.control = firstSwiper;


// links preventDefault
addEventListener("load", function() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
      e.preventDefault();
    });
  }
});
