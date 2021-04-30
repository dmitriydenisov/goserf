$(function (){

    $('[data-header-slider]').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/icons/arrow-left.svg"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/icons/arrow-right.svg"></img>',
        asNavFor: '[data-header-dots]',
    });

    $('[data-header-dots]').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '[data-header-slider]',
        responsive: [
          {
            breakpoint: 1024,
            settings:'unslick'
          },
        ]
    });

    $('[data-surf-slider]').slick({        
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/icons/arrow-left.svg"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/icons/arrow-right.svg"></img>',
        asNavFor: '[data-slider-map]',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
        ]

    });
    $('[data-slider-map]').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '[data-surf-slider]',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1211,
            settings: {
              slidesToShow: 4,
            }
          },
          
        ]
    });
    $('[data-holder-slider], [data-shop-slider]').slick({
        infinite:true,
        fade:true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/icons/arrow-left.svg"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/icons/arrow-right.svg"></img>',
    });


    


new WOW().init();
});



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });