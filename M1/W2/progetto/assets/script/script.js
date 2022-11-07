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

function esercizi(){
document.getElementsByClassName('uguale tasto') = ('document.getElementById("ops").value = eval(document.getElementById('ops').value)' )

//Lu ti voglio stupire sta volta, quella funzione che volevo tanto fare probabilmente la faccio..intanto ho pushato alle 17.48..se vedi commit successivi ci sono riuscito..magari ho sbagliato tutto

 

 