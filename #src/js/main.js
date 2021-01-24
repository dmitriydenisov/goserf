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
    });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/icons/plus.svg"></img></div><div class="quantity-button quantity-down"><img src="img/icons/minus.svg"></img></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
$('.summ').html('$' + summ);

$('.quantity-button').on('click', function () {
  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);
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