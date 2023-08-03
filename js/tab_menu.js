$( document ).ready( function() {
  let swiper1 = new Swiper('.tab_menu',{
    slidesPerView: 'auto',
    spaceBetween: 17,
    grabCursor: true,
      
  })
  $(".tab_menu li").click(function(){
    let idx = $(".tab_menu li").index(this); 
    $(".tab_menu li").removeClass("on")
    $(".top_side .menu").removeClass("on")
    $(".menu_img ul").removeClass("on")
    
    $(".tab_menu li").eq(idx).addClass("on")
    $(".top_side .menu").eq(idx).addClass("on")
    $(".menu_img ul").eq(idx).addClass("on")
  })

})