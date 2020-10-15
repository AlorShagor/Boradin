$('document').ready(function(){
//    Hotel Slider 
$('.hotel-slider-act').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


// Room Slider
$('.room-slider-active').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// News Slider 




// Gallery Slider 
$('.gallery-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


})