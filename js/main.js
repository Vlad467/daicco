
$('.roll-down').click(function(){
  $(this).parent().siblings('.hidden-cont').addClass('inline');
  $(this).parent().css('display', 'none');
  return false;
});

$('.leave-button').click(function(){
  $('.popup').addClass('rollup-visible');
  $('.leave-form').fadeIn(1000);
 /* $('body').addClass('overflow-y'); */
});
$('.close').click(function(){
  $('.application').fadeOut(500);
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
/* $('body').addClass('overflow-y'); */
 });
if($(window).width() <= 1200) {
  var A = $('.token-block1');
  var B = $('.token-block2');
  var c = $('.h2-token1');
  var d = $('.h2-token2');
  A.replaceWith(B.clone());
  B.replaceWith(A);
  c.replaceWith(d.clone());
  d.replaceWith(c);

  $('.slick-slider ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true
    //количество слайдов, которые перелистываются за один раз
  });
}
$('.roll-down-pc').click(function(){
  $(this).siblings('.PC-hidden').addClass('inline');
  $(this).css('display', 'none');
});
$('.burger-menu').click(function(){
  $('.mobile-menu').toggleClass('menu-opened');
});

