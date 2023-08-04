$( document ).ready( function() {

  $(".short_btn .btn2").click(function(e){
    e.preventDefault();
    $(".popup, .dim").css("display", "none")
  });
})
