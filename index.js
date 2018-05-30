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

// Image Manipulation

// target for jcrop image
// photograph fileupload control
// preview canvas preview
// clear_selection button the clear the selected area

// var jcrop_api;
// var canvas;
// var context;
// var image;
// var prefsize;

// function readURL(input) {

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('#target').attr('src', e.target.result);
//             setProperties();
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }

//  function setProperties(){
//    $('#target').Jcrop({
//               setSelect: [0,0,240,320]
//         });
//  }
//  $("#photograph").change(function(){
//     readURL(this);
//   });
