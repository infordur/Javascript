$(function() {
  //efecto mostrar casas
  function runEffect() {
    // run the effect
    $( "#effect" ).delay(500);
    $( "#effect" ).show( "blind", 800);
  };
    
  runEffect();

  $( "#effect" ).hide();

  //Efecto titulos de las casas
  $( ".tituloCasa" ).animate({
      opacity: 1
    }, 3000).animate({
      color: "#286640",
      "font-size": "23px"
    },1200);
});