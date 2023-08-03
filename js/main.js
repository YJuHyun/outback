$( document ).ready( function() {
  let main_slide = new Swiper('.main_slide',{
    grabCursor: true,
    pagination: {
      el: ".main_slide .swiper-pagination",
      type: "fraction",
    },
    loop: true,
  })
  $(".main_img_wrap").css("height", $(".main_img_wrap").width() );
  
})