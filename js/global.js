$( document ).ready( function() {
  $(".top_side").next().css("margin-top", $('.top_side').height() + 20)
  
  
})

$( document ).ready(function(){
  $(".short_btn .btn1").click(function(){
    $(".popup, .dim").css("display", "none")
  });
});