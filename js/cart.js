$( document ).ready( function() {
  $(".dim").hide()
 $(".con .popup").hide()

 $(".cart_btn").on("click", function(e){
   e.preventDefault();
   $(".dim").show();
   $(".popup").show();
 })

  $(".popup .short_btn .btn1", ".ea_wrap a").on("click", function(e){
    e.preventDefault();
  });
})