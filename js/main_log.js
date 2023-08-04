$( document ).ready( function() {
  let recomand_slide = new Swiper('.recomand_slide',{
    slidesPerView: 'auto',
    spaceBetween: 17,
    grabCursor: true,
  });

  $(".popup .short_btn .btn1").on("click", function(e){
    e.preventDefault();
  });
  
});