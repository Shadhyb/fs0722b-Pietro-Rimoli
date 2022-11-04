function n(dato){ 
    document.getElementById("ops").value += dato;
 }

 
 
 function ops() { 
 document.getElementById("ops").value = eval(document.getElementById('ops').value); 
 }
 
 function del() { 
  document.getElementById("ops").value = ""; 
 }
function phi(){
    document.getElementById('ops').value *=3.14
}
function percentage(){
    document.getElementById('ops').value /=100 
}



 

 