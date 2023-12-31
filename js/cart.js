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
  $(".close").on("click",function(e){
    e.preventDefault();
    $(this).parent().parent().parent().css( 'display', 'none' );
  })
  
  let orderEa = 1;

  let commas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  let eaCount = () => {
    let setPrice = 70900 * orderEa;
    $(".ea_show").text(orderEa);
    $(".ea_cell").text(commas(setPrice)); 
  }
  eaCount()
  $(".p_btn").on("click",function(e){
    e.preventDefault();
    if(orderEa < 10){
      orderEa++
    }
    eaCount()
  })
  $(".m_btn").on("click",function(e){
    e.preventDefault();
    if(orderEa > 1){
      orderEa--
    }
    eaCount()
  })
})
