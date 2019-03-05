// sliders initialize
$(document).ready(function(){
  $('.new-products__slider').slick({
    prevArrow: $('.new-products__slider-arrow--left'),
    nextArrow: $('.new-products__slider-arrow--right'),
  	slidesToShow: 3,
  	slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1169, // "all container" width -1
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });


  $('.featured-products__slider').slick({
    prevArrow: $('.featured-products__slider-arrow--left'),
    nextArrow: $('.featured-products__slider-arrow--right'),
  	slidesToShow: 4,
  	slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1169, // "all container" width -1
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
