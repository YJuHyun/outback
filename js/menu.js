$( document ).ready( function() {
  $( '.border h4 span' ).click( function() {
    $(this).toggleClass("on");
    $( this ).parent().siblings().stop().slideToggle(500);
  } );

  $(".squre_img").css("height", $(".squre_img").width() );
})