
$('.roll-down').click(function(){
  $(this).parent().siblings('.hidden-cont').addClass('inline');
  $(this).parent().css('display', 'none');
  return false;
});

$('.leave-button').click(function(){
  $('.popup').addClass('rollup-visible');
  $('.leave-form').fadeIn(1000);
  $('body').addClass('overflow-y');
});
$('.close').click(function(){
  $('.application, .thanks').fadeOut(500);
  setTimeout(
      function(){
        $('.popup').removeClass('rollup-visible');
        $('body').removeClass('overflow-y');
      }, 600
  );

});
$('.enroll-button').click(function(){
$('.popup').addClass('rollup-visible');
$('.enroll').fadeIn(1000);
 $('body').addClass('overflow-y');
 });
if($(window).width() <= 600) {
  var A = $('.token-block1');
  var B = $('.token-block2');
  var c = $('.h2-token1');
  var d = $('.h2-token2');
  A.replaceWith(B.clone());
  B.replaceWith(A);
  c.replaceWith(d.clone());
  d.replaceWith(c);

  /*$('.slick-slider ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true
    //количество слайдов, которые перелистываются за один раз
  });*/
}
$('.roll-down-pc').click(function(){
  $(this).parent().find('.PC-hidden').css('display','block');
  $(this).parent().find('.hidden-dots').css('display','none');
  $(this).css('display', 'none');
});
$('.burger-menu').click(function(){
  $('.mobile-menu').toggleClass('menu-opened');
});
$(document).mouseup(function (e) {
  var container = $(".modal");
  if (container.has(e.target).length === 0){
    container.fadeOut(500);
      $('.popup').fadeOut(600).removeClass('rollup-visible');
      $('body').removeClass('overflow-y');

  }
});
$('.thanks-button').click(function() {
  $('.application').fadeOut();
  $('.thanks').fadeIn(500);
  setTimeout(function(){
    $('.thanks').fadeOut(500);
    $('.popup').fadeOut(600).removeClass('rollup-visible');
    $('body').removeClass('overflow-y');
  }, 3000);
  return false;
});
$(".menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

//забираем идентификатор бока с атрибута href
  var id = $(this).attr('href'),

//узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

//анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
});
$('.video-img-cont img').click(function(){
  $('.video-img-cont iframe').click();
});

/*if($(window).width() <= 980) {
  if($(window).width() >= 600) {
  $('.slick-slider ').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true
    //количество слайдов, которые перелистываются за один раз
  });
  }
}
if($(window).width() <= 1170) {
  if($(window).width() >= 980) {
    $('.slick-slider ').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      easing: 'swing', // see http://api.jquery.com/animate/
      speed: 700,
      dots: true
      //количество слайдов, которые перелистываются за один раз
    });
  }
}*/
if($(window).width() < 1170) {
  $('.slick-slider ').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    //количество слайдов, которые перелистываются за один раз
  });
}