if(Cookies.get('save')=='true') {
  var caes = parseFloat(Cookies.get('caes'));
  var preco = Cookies.getJSON('preco');
  var posse = Cookies.getJSON('posse');
  var precoupg = Cookies.getJSON('precoupg');
  var upg = Cookies.getJSON('upg');
  var cps = Cookies.getJSON('cps');
  } else {
  var caes = 0;
  var preco = [50,200,2000,5000,15000,50000,150000];
  var posse = [0,0,0,0,0,0,0];
  var precoupg = [0,1000,5000,10000,40000,120000,250000];
  var upg = [1,0,0,0,0,0,0];
  var cps = [1,5,20,100,500,1000,5000,15000];
  }

function comprar(x) {
  return function(){
    if (caes>=preco[x]) {
    caes-=preco[x];
    preco[x]=Math.round(preco[x]*1.25);
    posse[x]+=1;
    } else {alert("Não tem dinheiro para tal ação")}
  }
}

function upgrade(x) {
  return function() {
    if(caes>=precoupg[x]) {
    caes-=precoupg[x];
    precoupg[x]=Math.round(precoupg[x]*1.5);
    upg[x]+=1;
  } else {alert("Não tem dinheiro para tal ação")}
  }
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
  for(var x in preco) {
    if(x!=0){
      caes+=resumir(x);
    }
  }
  $("#numero").html(caes+" Cães");
}, 1000);

function resumir(numero){
  return Math.round(posse[numero]*(cps[numero]*(upg[numero]/2+1)));
}

window.setInterval(function(){
  for(var x in preco) {
    if(x==0){
      $("#precoclicker").html(preco[0]);
      $("#quantiaclicker").html(cps[0]*upg[0]);
    } else {
        $("#price"+x).html(preco[x]);
        $("#stock"+x).html(posse[x]);
        $("#priceup"+x).html(precoupg[x]);
        $("#lvl"+x).html(upg[x]);

    }
  }
  var msg = 0;
  for(var x in preco) {
    if(x!=0){
      msg+=resumir(x);
    }
  }
  $("#cps").html(msg);
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

for (var x in preco) {
  if(x!=0){document.getElementById ("buy"+x).addEventListener("click",comprar(x), false);}
}

for (var x in preco) {
  if(x!=0){document.getElementById ("upgrade"+x).addEventListener("click",upgrade(x), false);}
}




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
