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
    imagens();
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

  $(".imgtest").on("mouseenter mouseleave", function(){
    $(this).find(".descricao").slideToggle();
  });

  $(".avatar").on("mouseenter mouseleave", function(){
    $(this).find("span:eq(0)").slideToggle();
  });

  window.addEventListener("load", function() {
  var elements = document.getElementsByClassName("rainbowText");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
});

function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}

  // avatar();




});

$(window).resize(function(){
  // avatar();
  imagens();
});

function imagens() {
  $(".imgtest").each(function(index){
   var H = $(".imgtest").eq(index).find("img").height();
   var W = $(".imgtest").eq(index).find("img").width();
    $(".imgtest").eq(index).height(H).width(W);
  });
}

function avatar() {
  var Ha = $(".avatar").find("img").height();
  var Wa = $(".avatar").find("img").width();
  $(".avatar").height(Ha).width(Wa);
}

// function organizar() {
//   var W = $(".galeria").width();
//   $(".imgtest").each(function(index){
//     if(index==0) {
//       $(".imgtest").eq(0).css("order", 1);
//     } else {
//         if($(".ingtest").eq(index).width()+14<=somar())
//     }

//   });
// }
