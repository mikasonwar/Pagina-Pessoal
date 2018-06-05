var red=1;
var yellow=0;
var mikas = 0;
$(document).ready(function(){
zXadrex();
zPopular();
zBordas();

zLado();


  $(".debugbutton").on("click", zBDebug);

});

function zLado(){
  if(mikas==1)
  {
    $(".vermelha").unbind("click", zEscolherDama);
    $(".h1").removeClass('r').addClass('y').text("Amarelo");
    $(".amarela").bind("click", zEscolherDama);
    mikas=0;
  }
  else
  {
    $(".amarela").unbind("click", zEscolherDama);
    $(".h1").removeClass('y').addClass('r').text("Vermelho");
    $(".vermelha").bind("click", zEscolherDama);
    mikas=1;
  }
}

function zBDebug() {
  var x = zDescobrirIndex($(".DJ").parent("td"));
  var y = zDescobrirIndex($(".PP").eq(1));
  zDebug([x,y,x-y]);
}


function zJogar(){
  var DJ = $(".DJ");
  $(".DJ").remove();
  $(this).append(DJ);
  $(".PK").unbind("click",zKill).removeClass('PK');
  $(".PP").unbind("click",zJogar).removeClass('PP');
  $(".DJ").on("click", zEscolherDama).removeClass('DJ');
  $(".highlight").removeClass('highlight');
  zLado();
}

function zKill(){
  var DJ = $(".DJ");
  $(".DJ").remove();
  $(this).append(DJ);
  $("td").eq($(this).attr('id')).find("div").remove();
  $(".PK").unbind("click",zKill).removeClass('PK');
  $(".PP").unbind("click",zJogar).removeClass('PP');
  $(".DJ").on("click", zEscolherDama).removeClass('DJ');
  $(".highlight").removeClass('highlight');
  zLado();
}


function zEscolher(elemento,cor){

// Amarelo
  if(cor==0) {
      if(elemento.find("div").hasClass('amarela')) {console.log("[Y]tá funcionar sócio "+zDescobrirIndex(elemento));}
        else if(elemento.find('div').hasClass('vermelha')) {
          if(zDescobrirIndex($(".DJ").parent("td"))-zDescobrirIndex(elemento)==7) {
            if($("td").eq(zDescobrirIndex(elemento)-7).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass('bordaD'))
              {console.log("[Y] zEscolher bordaD");}
            else {$("td").eq(zDescobrirIndex(elemento)-7).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else if(zDescobrirIndex($(".DJ").parent("td"))-zDescobrirIndex(elemento)==9){
            if($("td").eq(zDescobrirIndex(elemento)-9).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass('bordaE'))
              {console.log("[Y] zEscolher bordaE");}
            else {$("td").eq(zDescobrirIndex(elemento)-9).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else {zDebug([zDescobrirIndex(elemento),zDescobrirIndex($(".DJ").parent("td")),zDescobrirIndex(elemento)-9])}
        }
        else {
          elemento.toggleClass('highlight');
          elemento.addClass("PP");
          elemento.bind("click",zJogar);
        }
  }
// Vermelho
  else if(cor==1) {
      if(elemento.find("div").hasClass('vermelha')) {console.log("[R]tá funcionar sócio "+zDescobrirIndex(elemento));}
        else if(elemento.find('div').hasClass('amarela')) {
          if(zDescobrirIndex(elemento)-zDescobrirIndex($(".DJ").parent("td"))==7) {
            if($("td").eq(zDescobrirIndex(elemento)+7).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass('bordaE'))
              {console.log("[R] zEscolher bordaD");}
            else {$("td").eq(zDescobrirIndex(elemento)+7).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else if(zDescobrirIndex(elemento)-zDescobrirIndex($(".DJ").parent("td"))==9){
            if($("td").eq(zDescobrirIndex(elemento)+9).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass('bordaD'))
              {console.log("[R] zEscolher bordaE");}
            else {$("td").eq(zDescobrirIndex(elemento)+9).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else {zDebug([zDescobrirIndex(elemento),zDescobrirIndex($(".DJ").parent("td")),zDescobrirIndex(elemento)+9])}
        }
        else {
          elemento.toggleClass('highlight');
          elemento.addClass("PP");
          elemento.bind("click",zJogar);
        }
  }
// Debug Erro
  else {
    alert("Erro! zEscolher");
  }

}

function zDescobrirIndex(elemento) {
  return (elemento.parent("tr").index()*8)+elemento.index();
}

function zEscolherDama() {
  if($(this).hasClass('amarela')) {
    // ********************************************************************************************
    //                                            Amarelo
    // ********************************************************************************************
      if($(this).hasClass("DJ")){
        $(".highlight").removeClass("highlight");
        $(this).removeClass("DJ");
        $(".PP").removeClass('PP');
        $(".PK").removeClass('PK');
      }
    else {
      $(".highlight").removeClass("highlight");
      var z = zDescobrirIndex($(this).parent("td"));
      var direita = $("td").eq(z-7);
      var esquerda = $("td").eq(z-9);
      // $(this).parent("td").toggleClass("highlight");
      $(".PK").unbind('click', zKill).removeClass('PK');
      $(".PP").unbind("click",zJogar).removeClass("PP");
      $(".DJ").removeClass("DJ");
      var DJ = $(this);
      $(this).addClass('DJ');

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
  }
  // ********************************************************************************************
  // ********************************************************************************************

  else if ($(this).hasClass('vermelha')) {
    // ********************************************************************************************
    //                                    Vermelho
    // ********************************************************************************************
    if($(this).hasClass("DJ")){$(".highlight").removeClass("highlight");$(this).removeClass("DJ");}
      else {
        $(".highlight").removeClass("highlight");
        var z = zDescobrirIndex($(this).parent("td"));
        var esquerda = $("td").eq(z+7);
        var direita = $("td").eq(z+9);
        // $(this).parent("td").toggleClass("highlight");
        $(".PK").unbind('click', zKill).removeClass('PK');
        $(".PP").unbind("click",zJogar).removeClass("PP");
        $(".DJ").removeClass("DJ");
        $(this).addClass('DJ');


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
      // Debug Erro
      } else {alert("alert zEscolherDama");}
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
  var y = x + x + x + x;
  linhax.innerHTML=y;
  $(linhax).appendTo("table");
}

function zLinhaY() {
  var linhay = document.createElement("tr");
  var x = "<td class='preto'></td><td></td>";
  var y = x + x + x + x;
  linhay.innerHTML=y;
  $(linhay).appendTo("table");
}

function zXadrex() {
  for(i=0;i<4;i++) {
    zLinhaX();
    zLinhaY();
  }
}

function zPopular() {
  for(i=0;i<12;i++) {
    $(".preto").eq(i).append("<div class='dama vermelha'></div>");
  }

  for(i=20;i<32;i++) {
    $(".preto").eq(i).append("<div class='dama amarela'></div>");
  }
}

function zBordas() {
  for(i=0;i<10;i++) {
    $("tr").eq(i).find("td").first().addClass('bordaE');
    $("tr").eq(i).find("td").last().addClass('bordaD');
  }
}


