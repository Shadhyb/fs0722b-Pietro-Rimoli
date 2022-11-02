/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 5
let num2 = 3
let maggiore = (num2>num1)
console.log(maggiore)
function esercizio1(){
  alert (maggiore)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numeroGiusto = 5
let numeroSbagliato = 3
let diff = (numeroGiusto === numeroSbagliato)
console.dir(diff)
function esercizio2(){
  alert(diff)
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let risultato = (4%5)
console.dir(risultato)
function esercizio3(){
  alert(risultato)
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let x = 4
let y = 3
let somma =(x+y)
function esercizio4(){
  if(somma==8){alert('giusto')}
  else{alert('sbagliato')}
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  
*/


let smartphone = {
  marca:'apple',
  prezzo: 10,
  aggiunte: [
      {
          nome:'cover',
          prezzo:20
      },
      {
          nome:'assicurazione',
          prezzo:30
      },
      {
          nome:'cuffie',
          prezzo:40
      },
  ],
  mostraPrezzo: function(){//metodo
      console.log('Spedizione gratuita con 50 € di spesa')
  }
}

console.log(smartphone.prezzo)
console.log(smartphone.aggiunte[3])
smartphone.mostraPrezzo()
if (smartphone.prezzo <50) {console.log('spedizione al costo di 10€')}
else{console.log('Complimenti, la spedizione è gratuita')}




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let smartphone2 = {
  marca:'apple',
  prezzo: 10,
  aggiunte: [
      {
          nome:'cover',
          prezzo:20,
          sconto:6
      },
      {
          nome:'assicurazione',
          prezzo:30,
          sconto:6
      },
      {
          nome:'cuffie',
          prezzo:40,
          sconto:6
      },
  ],
  mostraPrezzo: function(){//metodo
      console.log('Spedizione gratuita con 50 € di spesa')
  }
}

console.log(smartphone2.prezzo)
console.log(smartphone2.aggiunte[3])
console.dir(10 % 6)
smartphone2.mostraPrezzo()
if (smartphone.prezzo.sconto <50) {console.log('spedizione al costo di 10€')}
else{console.log('Complimenti, la spedizione è gratuita')}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a=5
let b=7
let c=20
let z=(c>b>a)

console.log(z)
function esercizio7(){
  alert (z)
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let parola=('john')
typeof('john')
console.log(parola)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let f = 3

let risult = (f % 2)
console.log (risult)
function esercizio9(){
  alert(risult)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7;
  val = 4;
  val +=11
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}
console.log(me)



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}
delete lastName
console.log(me2)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/




/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
