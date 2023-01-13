var user1 = 70;
var user2 = 40;
console.log("utente1 ha scelto: " + user1);
console.log("utente2 ha scelto: " + user2);
var bottone = document.getElementById('winner');
var numeroVincente = document.getElementById('div');
var random = (Math.floor(Math.random() * 100));
console.log("numero vincente: " + random);
var div = document.createElement('div').innerHTML = "the winner is ".concat(random);
bottone.append(div);
if (random <= user1) {
    console.log("il vincitore è user1");
}
else if (random > user2) {
    console.log("il vincitore è user2");
}
else {
    console.log("nessun vincitore");
}
