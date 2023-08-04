

$( document ).ready(function(){
  $(".border.agree button").click(function(){
    $(this).parent("div").next().toggleClass("on")
  });
});