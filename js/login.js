$( document ).ready( function() {
  $("#id").on('input', function(){
    if($('#id').val().length > 0){
      $('.id_blank').hide();
    }else{
      $('.id_blank').show();
    }
  })
  $("#pw").on('input', function(){
    if($('#pw').val().length > 0){
      $('.pw_blank').hide();
    }else{
      $('.pw_blank').show();
    }
  })
  
  $(".dim").hide()
  $(".login_page .popup").hide()

  $(".login_btn").on("click", function(e){
    e.preventDefault();
    $(".dim").show();
    $(".popup").show();
  })
})