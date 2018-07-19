$('.roll-down').click(function(){
  $(this).siblings('.PC-hidden').css('display', 'block');
  $(this).siblings('.hidden-cont').css('display', 'block');
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
}
$('.burger-menu').click(function(){
  $('.mobile-menu').toggleClass('menu-opened');
});
