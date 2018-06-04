var red=1;
var yellow=0;
$(document).ready(function(){
zXadrex();
zPopular();
zBordas();

$(".amarela").on("click", function(){
  if($(this).parent("td").hasClass("highlight")){$(".highlight").removeClass("highlight")}
  else {
    $(".highlight").removeClass("highlight");
    var z = ($(this).parent("td").parent("tr").index()*10)+$(this).parent("td").index();
    var direita = $("td").eq(z-9);
    var esquerda = $("td").eq(z-11);
    $(this).parent("td").toggleClass("highlight");


     if($("td").eq(z-10).hasClass("bordaE")) {
        zEscolher(direita,yellow);
      }
      else if ($("td").eq(z-10).hasClass("bordaD")){
        zEscolher(esquerda,yellow);
        }
    else {
        zEscolher(esquerda,yellow);
        zEscolher(direita,yellow);
        }
  }
  });

$(".vermelha").on("click", function(){
if($(this).parent("td").hasClass("highlight")){$(".highlight").removeClass("highlight")}
else {
  $(".highlight").removeClass("highlight");
  var z = ($(this).parent("td").parent("tr").index()*10)+$(this).parent("td").index();
  var esquerda = $("td").eq(z+9);
  var direita = $("td").eq(z+11);
  $(this).parent("td").toggleClass("highlight");


   if($("td").eq(z+10).hasClass("bordaE")) {
      zEscolher(direita,red);
    }
    else if ($("td").eq(z+10).hasClass("bordaD")){
      zEscolher(esquerda,red);
      }
  else {
      zEscolher(esquerda,red);
      zEscolher(direita,red);
      }
}
});

});


function zJogar(){

}

function zEscolher(elemento,cor){

  if(cor==0) {
      if(elemento.find("div").hasClass('amarela')) {console.log("[Y]tá funcionar sócio "+elemento.index());}
        else {elemento.toggleClass('highlight');}
  }
  else if(cor==1) {
      if(elemento.find("div").hasClass('vermelha')) {console.log("[R]tá funcionar sócio "+elemento.index());}
        else {elemento.toggleClass('highlight');}
  }
  else {
    alert("Erro!");
  }

}

function zDebug(Arr) {
  var msg="";
  Arr.forEach(function(i){
    msg+=i + " ";
  });
  alert(msg);
}


function zLinhaX() {
  var linhax = document.createElement("tr");
  var x = "<td></td><td class='preto'></td>";
  var y = x + x + x + x + x;
  linhax.innerHTML=y;
  $(linhax).appendTo("table");
}

function zLinhaY() {
  var linhay = document.createElement("tr");
  var x = "<td class='preto'></td><td></td>";
  var y = x + x + x + x + x;
  linhay.innerHTML=y;
  $(linhay).appendTo("table");
}

function zXadrex() {
  for(i=0;i<5;i++) {
    zLinhaX();
    zLinhaY();
  }
}

function zPopular() {
  for(i=0;i<20;i++) {
    $(".preto").eq(i).append("<div class='dama vermelha'></div>");
  }

  for(i=30;i<50;i++) {
    $(".preto").eq(i).append("<div class='dama amarela'></div>");
  }
}

function zBordas() {
  for(i=0;i<10;i++) {
    $("tr").eq(i).find("td").first().addClass('bordaE');
    $("tr").eq(i).find("td").last().addClass('bordaD');
  }
}


