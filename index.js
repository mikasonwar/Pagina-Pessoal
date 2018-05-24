$(document).ready(function(){

  $("#cvideojogos").hide();
  $("#ceducacao").hide();
  $("#cprojetos").hide();
  $("#cstaffatual").hide();
  $("#cstaffantiga").hide();
  $("#chabilidades").hide();

  $("#videojogos").on("click",function(){
    $("#cvideojogos").slideToggle();
  });
  $("#educacao").on("click",function(){
    $("#ceducacao").slideToggle();
  });
  $("#projetos").on("click",function(){
    $("#cprojetos").slideToggle();
  });
  $("#staffatual").on("click",function(){
    $("#cstaffatual").slideToggle();
  });
  $("#staffantiga").on("click",function(){
    $("#cstaffantiga").slideToggle();
  });
  $("#habilidades").on("click",function(){
    $("#chabilidades").slideToggle();
  });

  $(".csshidden").on("click", function(){
    $(".Jquery").slideToggle();
  });
});

