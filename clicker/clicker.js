if(Cookies.get('save')=='true') {
  var caes = parseFloat(Cookies.get('caes'));
  var preco = Cookies.getJSON('preco');
  var posse = Cookies.getJSON('posse');
  var precoupg = Cookies.getJSON('precoupg');
  var upg = Cookies.getJSON('upg');
  var cps = Cookies.getJSON('cps');
  } else {
  var caes = 0;
  var preco = [50,500];
  var posse = [0,0];
  var precoupg = [0,10000];
  var upg = [1,0];
  var cps = [1, 10];
  }



$(document).ready(function(){

//  alert(Cookies.get('caes'));
//  alert(Cookies.get('preco').replace(/[\[\]]/g, '').split(","));
//  alert(Cookies.get('posse').replace(/[\[\]]/g, '').split(","));
//  alert(Cookies.get('precoupg').replace(/[\[\]]/g, '').split(","));
//  alert(Cookies.get('upg').replace(/[\[\]]/g, '').split(","));
//  alert(Cookies.get('cps').replace(/[\[\]]/g, '').split(","));

$("#numero").html(caes+" Cães");
$("#price1").html(preco[1]);
$("#priceup1").html(precoupg[1]);
Guardar(false);
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

window.setInterval(function(){
  Guardar(true);
}, 60000)

$("#salvar").click(function(){
  Guardar(true);
});

$("#apagar").click(function(){
  if(confirm("Tem a certeza?")){
    Cookies.remove('caes');
    Cookies.remove('preco');
    Cookies.remove('posse');
    Cookies.remove('precoupg');
    Cookies.remove('upg');
    Cookies.remove('cps');
    Cookies.set('save', false, { expires: 365, path: '' });
    location.reload();
  }
})

function Guardar(bool){
  Cookies.set('caes', caes, { expires: 365, path: '' });
  Cookies.set('precoupg', precoupg, { expires: 365, path: '' });
  Cookies.set('preco', preco, { expires: 365, path: '' });
  Cookies.set('posse', posse, { expires: 365, path: '' });
  Cookies.set('upg', upg, { expires: 365, path: '' });
  Cookies.set('cps', cps, { expires: 365, path: '' });
  Cookies.set('save', true, { expires: 365, path: '' });
  if(bool==true) {
  $(".alert").show().delay(10000).fadeOut();
  }
}

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
