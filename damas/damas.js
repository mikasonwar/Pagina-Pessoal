var red=1;
var yellow=0;
var mikas = 0;
var tracking=0;
$(document).ready(function(){


zXadrex();
zPopular();
zBordas();

console.log("zlado chamado pelo document.ready");
zLado();



  $(".debugbutton").on("click", zBDebug);
  $(".resetbutton").on("click", zRestart);
});

function zRestart() {
  if(confirm("de certeza?")){
  mikas=0;
  $("table").remove();
  $(".jogo").append("<table></table>");
  zXadrex();
  zPopular();
  zBordas();
  zLado();
  } else{alert("Uff que sorte! quase que já ia tudo!");}
}

function zForcarComer() {
tracking = 0;
  if(mikas==1)
  {
    for(i=0;i<$(".amarela").length;i++) {
      var x = zDescobrirIndex($(".amarela").eq(i).parent("td"));
      if($("td").eq(x-9).find("div").hasClass('vermelha') && !$("td").eq(x-9).hasClass("bordaE") )
      {
        if(!$("td").eq(x-18).find("div").hasClass("dama"))
        {
          tracking=1;
          $("td").eq(x).find("div").unbind("click", zEscolherDama);
          $("td").eq(x).find("div").bind("click", zEscolherDama);
          console.log("pode comer à esquerda");
          $("td").eq(x-9).addClass('teste');
        }
      }
      if($("td").eq(x-7).find("div").hasClass('vermelha') && !$("td").eq(x-7).hasClass("bordaD"))
      {
        if(!$("td").eq(x-14).find("div").hasClass("dama"))
        {
          tracking=1;
          $("td").eq(x).find("div").unbind("click", zEscolherDama);
          $("td").eq(x).find("div").bind("click", zEscolherDama);
          console.log("pode comer à direita");
          $("td").eq(x-7).addClass('teste');
        }
      }
    }
    console.log("[Y] zForcarComer");
  }
  else if(mikas==0)
  {
    for(i=0;i<$(".vermelha").length;i++) {
      var x = zDescobrirIndex($(".vermelha").eq(i).parent("td"));
      if($("td").eq(x+9).find("div").hasClass('amarela') && !$("td").eq(x+9).hasClass("bordaD"))
      {
        if(!$("td").eq(x+18).find("div").hasClass("dama"))
        {
          tracking=1;
          $("td").eq(x).find("div").bind("click", zEscolherDama);
          console.log("pode comer à direita");
          $("td").eq(x+9).addClass('teste');
        }
      }
      if($("td").eq(x+7).find("div").hasClass('amarela') && !$("td").eq(x+7).hasClass("bordaE"))
      {
        if(!$("td").eq(x+14).find("div").hasClass("dama"))
        {
          tracking=1;
          $("td").eq(x).find("div").bind("click", zEscolherDama);
          console.log("pode comer à esquerda");
          $("td").eq(x+7).addClass('teste');
        }
      }
    }
  console.log(x);
  console.log("[R] zForcarComer");
  }
  else {alert("Erro Mikas != 1 || 0 [zForcarComer]");}

  if(tracking==1){return false;}
  else if(tracking==0){return true;}
}


function zJogo(){
  if($(".amarela").length>0)
  {
      if($(".vermelha").length>0)
      {
        return true;
      }
      else
      {
        $(".h1").removeClass('r').addClass('y').text("Amarelo ganhou!");
        return false;
      }
  }
  else
  {
    $(".h1").removeClass('y').addClass('r').text("Vermelho ganhou!");
    return false;
  }

}


function zLado(){
  if(zJogo()) {
    if(mikas==1) //Vez do Amarelo
    {
      $(".vermelha").unbind("click", zEscolherDama);
      $(".h1").removeClass('r').addClass('y').text("Amarelo");
      if(zForcarComer()){
      $(".amarela").bind("click", zEscolherDama);
      }
      mikas=0;
    }
    else if(mikas==0) //Vez do vermelho
    {
      $(".amarela").unbind("click", zEscolherDama);
      $(".h1").removeClass('y').addClass('r').text("Vermelho");
      if(zForcarComer()){
      $(".vermelha").bind("click", zEscolherDama);
      }
      mikas=1;
    }
    else {alert("Erro Mikas != 1 || 0 [zLado]");}
  }
}

  //Debug para saber algumas variavéis
function zBDebug() {
  var x = zDescobrirIndex($(".DJ").parent("td"));
  var y = zDescobrirIndex($(".PP").eq(1));
  zDebug([x,y,x-y]);
}

function zDescobrirRainha() {
  var x = zDescobrirIndex($(".DJ").parent("td"));
  if($(".DJ").hasClass('amarela') && x<8) {$(".DJ").addClass('rainha')}
  if($(".DJ").hasClass('vermelha') && x>55) {$(".DJ").addClass('rainha')}
}

function zJogar(){
  var DJ = $(".DJ");
  $(".DJ").remove();
  $(this).append(DJ);
  $(".PK").unbind("click",zKill).removeClass('PK');
  $(".PP").unbind("click",zJogar).removeClass('PP');
  zDescobrirRainha();
  $(".DJ").on("click", zEscolherDama).removeClass('DJ');
  $(".highlight").removeClass('highlight');
  console.log("zlado chamado pelo zjogar");
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
  $(".teste").removeClass('teste');
  console.log("zlado chamado pelo zkill");
  zLado();
}

function zEscolher(elemento,cor){

// Amarelo
  if(cor==0) {
      if(elemento.find("div").hasClass('amarela')) {console.log("[Y]tá funcionar sócio "+zDescobrirIndex(elemento));}
        else if(elemento.find('div').hasClass('vermelha')) {
          if(zDescobrirIndex($(".DJ").parent("td"))-zDescobrirIndex(elemento)==7) {
            if($("td").eq(zDescobrirIndex(elemento)-7).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass("bordaD"))
              {console.log("[Y] zEscolher bordaD");}
            else {$("td").eq(zDescobrirIndex(elemento)-7).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else if(zDescobrirIndex($(".DJ").parent("td"))-zDescobrirIndex(elemento)==9){
            if($("td").eq(zDescobrirIndex(elemento)-9).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass("bordaE"))
              {console.log("[Y] zEscolher bordaE");}
            else {$("td").eq(zDescobrirIndex(elemento)-9).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else {zDebug([zDescobrirIndex(elemento),zDescobrirIndex($(".DJ").parent("td")),zDescobrirIndex(elemento)-9],"Rainha?")}
        }
        else {
          if(tracking==0) {
          elemento.toggleClass('highlight');
          elemento.addClass("PP");
          elemento.bind("click",zJogar);
          }
        }
  }
// Vermelho
  else if(cor==1) {
      if(elemento.find("div").hasClass('vermelha')) {console.log("[R]tá funcionar sócio "+zDescobrirIndex(elemento));}
        else if(elemento.find('div').hasClass('amarela')) {
          if(zDescobrirIndex(elemento)-zDescobrirIndex($(".DJ").parent("td"))==7) {
            if($("td").eq(zDescobrirIndex(elemento)+7).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass("bordaE"))
              {console.log("[R] zEscolher bordaE");}
            else {$("td").eq(zDescobrirIndex(elemento)+7).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else if(zDescobrirIndex(elemento)-zDescobrirIndex($(".DJ").parent("td"))==9){
            if($("td").eq(zDescobrirIndex(elemento)+9).find("div").hasClass('dama') || $("td").eq(zDescobrirIndex(elemento)).hasClass("bordaD"))
              {console.log("[R] zEscolher bordaD");}
            else {$("td").eq(zDescobrirIndex(elemento)+9).toggleClass('PK').attr('id', zDescobrirIndex(elemento)).bind("click",zKill);}
          }
          else {zDebug([zDescobrirIndex(elemento),zDescobrirIndex($(".DJ").parent("td")),zDescobrirIndex(elemento)+9])}
        }
        else {
          if(tracking==0) {
          elemento.toggleClass('highlight');
          elemento.addClass("PP");
          elemento.bind("click",zJogar);
          }
        }
  }
// Debug Erro
  else {
    alert("Erro! zEscolher");
  }

}

  //Descubrir o numero do quadrado
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

       if($("td").eq(z-8).hasClass("bordaE")) {
          zEscolher(direita,yellow);
        }
        else if ($("td").eq(z-8).hasClass("bordaD")){
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
    if($(this).hasClass("DJ")){
      $(".highlight").removeClass("highlight");
      $(this).removeClass("DJ");
      $(".PP").removeClass('PP');
      $(".PK").removeClass('PK');
    }
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


         if($("td").eq(z+8).hasClass("bordaE")) {
            zEscolher(direita,red);
          }
          else if ($("td").eq(z+8).hasClass("bordaD")){
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
  for(i=0;i<8;i++) {
    $("td").eq(i).addClass('bordaC');
  }
  for(i=56;i<64;i++) {
    $("td").eq(i).addClass("bordaB");
  }
}


