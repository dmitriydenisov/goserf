$(function (){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/icons/arrow-left.svg"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/icons/arrow-right.svg"></img>',
        asNavFor: '.slider-dots--head',
    });

    $('.slider-dots--head').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

    $('.surf__slider').slick({        
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/icons/arrow-left.svg"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/icons/arrow-right.svg"></img>',
        asNavFor: '.slider-map',

    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '.surf__slider',
        focusOnSelect: true
    });
    $('.holder__slider').slick({
        infinite:true,
        fade:true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/icons/arrow-left.svg"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/icons/arrow-right.svg"></img>',
    })
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