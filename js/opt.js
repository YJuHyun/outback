$( document ).ready( function() {
  let orderEa = 1;

  let commas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  let eaCount = () => {
    let setPrice = 70900 * orderEa;
    $(".ea_show").text(orderEa);
    $(".pay span").text(commas(setPrice)); 
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