$(function() {
   //Efecto Buscador
  $( "#buscador" ).animate({
      opacity: 1,
    }, 1200);

//Efecto Botón
 $( "#boton" ).animate({
    "margin-left":"200px",
    }, 1200).animate({
    "margin-right":"400px",
    },1200).animate({
    "margin-left": "400px",
    "font-size":"40px"
    }, 1200);
 
});