/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

function esercizio1(){
  alert('sono i tipi di dato che JS accetta e possono essere numerici, alfabetici, booleani, undefined e null. Booleani sono valori true o false, null è un valore intenzionalmente assente, undefined è un dato senza valore')
}



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var nome =('Pietro')
console.log (nome)
function esercizio2(){
  alert ('Pietro')
}

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var x = 12
var y = 20

console.dir (x + y)
function esercizio3(){
  alert (32)
}

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12
function esercizio4(){
  alert (x=12)
}

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var nome = ('Rimoli')
//const costante =('Rimoli') /*togliere il commento per verificare
console.dir(nome)
function esercizio5(){
  alert(nome)

}


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var numero = 4
console.dir(4 + x)
function esercizio6(){
alert(numero)
}
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var nome1 = ('john')
var nome2 = ('John')
var john = (nome1 === nome2)
console.log (john)
if (nome1.toLowerCase === nome2.toLowerCase){
  console.log('true')
}
else{
  console.log('false')
}
function esercizio7(){
  alert (john)
}




