$( document ).ready( function() {
  $( '.border' ).click( function() {
    $(this).find('h4 span').toggleClass("on");
    $(this).children('ul').stop().slideToggle(500);
    $(this).find('div').stop().slideToggle(500);
  } );

  $(".squre_img").css("height", $(".squre_img").width() );
  
  $(window).on("resize", function(){
    $(".squre_img").css("height", $(".squre_img").width() );
  })
})