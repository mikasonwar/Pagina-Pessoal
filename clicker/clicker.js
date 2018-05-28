var caes = 0;
var preco = [50,500];
var posse = [0,0];
var precoupg = [0,10000];
var upg = [1,0];
var cps = [1, 10];



$(document).ready(function(){

$("#numero").html(caes+" Cães");
$("#price1").html(preco[1]);
$("#priceup1").html(precoupg[1]);

window.setInterval(function(){
  caes+=resumir(1);
  $("#numero").html(caes+" Cães");
}, 1000);

function resumir(numero){
  return Math.round(posse[numero]*(cps[numero]*(upg[numero]/2+1)));
}

window.setInterval(function(){
  //init
  $("#numero").html(caes+" Cães");
  $("#cps").html(posse[1]*(cps[1]*(upg[1]/2+1)));
  //Clicker
  $("#precoclicker").html(preco[0]);
  $("#quantiaclicker").html(cps[0]*upg[0])
  // 1
  $("#price1").html(preco[1]);
  $("#stock1").html(posse[1]);
  $("#priceup1").html(precoupg[1]);
  $("#lvl1").html(upg[1]);

}, 5)

$("#teste").click(function(){
document.cookie = "caes="+caes+"; expires=Thu, 18 Dec 2018 12:00:00 UTC; path=/";
document.cookie = "caes=1; expires=Thu, 18 Dec 2018 12:00:00 UTC; path=/";
});

$("#buyclicker").click(function(){
  if(caes>=preco[0]) {
    caes-=preco[0];
    preco[0]=Math.round(preco[0]*1.1);
    upg[0]+=1;
  } else {alert("Não tem dinheiro para tal ação")}
});


$("#buy1").click(function() {
  if (caes>=preco[1]) {
    caes-=preco[1];
    preco[1]=Math.round(preco[1]*1.25);
    posse[1]+=1;
  } else {alert("Não tem dinheiro para tal ação")}
});

$("#upgrade1").click(function(){
  if(caes>=precoupg[1]) {
    caes-=precoupg[1];
    precoupg[1]=Math.round(precoupg[1]*1.5);
    upg[1]+=1;
  } else {alert("Não tem dinheiro para tal ação")}
});


$("#clicker").on("click", function(){
  caes+=cps[0]*upg[0];
  $("#numero").html(caes+" Cães");
});

});

function addC(numero) {
  caes+=numero;
  $("#numero").html(caes+" Cães");
  alert(numero + " Cães adicionados");
}
