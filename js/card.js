$( document ).ready( function() {
  let card_slide = new Swiper('.card_slide',{
    slidesPerView: 'auto',
    spaceBetween: 17,
    grabCursor: true,
  })
  $( '.border h4' ).click( function() {
    $(this).find('span').toggleClass("on");
    // $(this).next().children('ul').stop().slideToggle(500);
    $(this).next().stop().slideToggle(500);
  } );

  $(".squre_img").css("height", $(".squre_img").width() );
  
  $(window).on("resize", function(){
    $(".squre_img").css("height", $(".squre_img").width() );
  })
})