$(document).ready(function(){
var teste = 0;
$("#numero").html(teste+" Cães");

$("#clicker").on("click", function(){
  teste+=1;
  $("#numero").html(teste+" Cães");
});

});
