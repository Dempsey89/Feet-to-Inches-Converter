function num(e){
var textfield=document.getElementById(e);
var ref= /[^0-9]/gi;
textfield.value=textfield.value.replace(ref, "");
    }
$(document).ready(function(){
  $("#1").click(function(){
    $("#i").show();
    $("#f").hide();
    $("#f").val("");
    $("#i").val("");
    $("#i").focus();
    });
  $("#2").click(function(){
    $("#f").show();
    $("#i").hide();
    $("#f").val("");
    $("#i").val("");
    $("#f").focus();
    });
  
  $("#cl").click(function(){
    $("#f").val("");
    $("#i").val("");
    })
  
  $("#c").click(function(){
    var a=$("#i").val();
    var b=(a+" feet = " +a*12+ " inches");
    $("#i").val(b);
    var aa=$("#f").val();
    var bb=aa/12;
    var ab=parseInt(bb, 10);
    var abb=(aa+ " inches = " +ab +" feet")
    var c=(" and " + aa%12 + " inches");
    var cc=abb+c;
    if (aa%12===0){
     $("#f").val(abb);
     }
    else{
    $("#f").val(cc);
    }
    });
  
  $("input").keyup(function(w) {
    if(w.which == 13) {
    $("#c").click();
    }
});
 
  
})