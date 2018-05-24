$(document).ready(function(){

  $("#cvideojogos").hide();
  $("#ceducacao").hide();
  $("#cprojetos").hide();
  $("#cstaffatual").hide();
  $("#cstaffantiga").hide();
  $("#chabilidades").hide();

  $(".tab").on("mouseenter", function(){
    $(".tabactive").addClass('abaativa');
    $(".tabactive").removeClass('tabactive');
  });

  $(".tab").on("mouseleave", function(){
    $(".abaativa").addClass('tabactive');
    $(".abaativa").removeClass('abaativa');
  });

  $(".tab").on("click", function(){
    $(".tabactive").removeClass('tabactive');
    $(".abaativa").removeClass('abaativa');
    $(this).addClass('tabactive')
    $(".tabmanager").hide();
  });

  $("#Experiencia").on("click", function(){
    $(".containerexperiencia").show();
  });

  $("#Testes").on("click", function(){
    $(".containertestes").show();
  });

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

