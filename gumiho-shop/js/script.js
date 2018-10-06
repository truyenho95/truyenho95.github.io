$(document).ready(function(){

  // Owl-Carousel controller
  $('.banner-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [$('.prev'),$('.next')],
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('.product-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainer: '.slide-control-products',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });

  $('.catalog-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainer: '.slide-control-catalog',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });

  $('.blog-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainer: '.slide-control-blog',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

  $('.catalog__new-product-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainer: '.catalog__slide-control-new-product',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('.catalog__popular-product-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainer: '.catalog__slide-control-popular-product',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('.detail-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainer: '.detail__slide-control-related-products',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });

  // Detail select input number
  let action;
  $(".number-spinner button").mousedown(function () {
      btn = $(this);
      input = btn.closest('.number-spinner').find('input');
      btn.closest('.number-spinner').find('button').prop("disabled", false);

    if (btn.attr('data-dir') === 'up') {
          action = setInterval(function(){
              if ( input.attr('max') === undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                  input.val(parseInt(input.val())+1);
              }else{
                  btn.prop("disabled", true);
                  clearInterval(action);
              }
          }, 50);
    } else {
          action = setInterval(function(){
              if ( input.attr('min') === undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                  input.val(parseInt(input.val())-1);
              }else{
                  btn.prop("disabled", true);
                  clearInterval(action);
              }
          }, 50);
    }
  }).mouseup(function(){
      clearInterval(action);
  });

  // Dynamic Function
  var dynamicFunc = () => {
    // INDEX-Page  Dynamic Width = Line-Height
    var div__headerCartProductRemoveBtn = $('.header__cart--product-remove--btn');
    var width__div__headerCartProductRemoveBtn = div__headerCartProductRemoveBtn.width();

    div__headerCartProductRemoveBtn.css('height', width__div__headerCartProductRemoveBtn);
    div__headerCartProductRemoveBtn.css('line-height', width__div__headerCartProductRemoveBtn+'px');

    // DETAIL-Page Dynamic Height = Width
    var div_detail__img = $('.detail__img');
    var width_detail__img = div_detail__img.width();

    div_detail__img.css('height', width_detail__img);

    // DETAIL-Page Dynamic Height = Line-Height
    var button_addToCart = $('button#addToCart');
    var height__addToCart = button_addToCart.height();

    button_addToCart.css('line-height', height__addToCart+'px');
  };

  // Resize window
  $(window).resize(dynamicFunc());

  // Display: Block Func
  const displayAll = () => {
    $("header").fadeIn(2000, () => $("header").addClass("d-block"));
    $("main").fadeIn(2000, () => $("main").addClass("d-block"));
    $("footer").fadeIn(2000, () => $("footer").addClass("d-block"));
  }

  window.onload = () => {
    $(".preload").fadeOut(500, () => {
      $(this).addClass("d-none");
    });
    displayAll();
  };
});
