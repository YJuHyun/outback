

$(document).ready(function(){
    $('input[id="search"]').focus(function(){
        $("form span").addClass("off")
    });
    $('input[id="search"]').blur(function(){
        $("form span").removeClass("off")
    });

    $(".adress_select ul li a").click(function(e){
        e.preventDefault();
        e.stopPropagation();
      });
});