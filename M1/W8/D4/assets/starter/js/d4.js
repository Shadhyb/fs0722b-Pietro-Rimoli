var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantità, colore, prezzoivainclusa, prezzoivaesclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa - ((this.prezzoivainclusa / 100) * this.saldo);
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return (this.getsaldocapo()) * this.quantità;
    };
    Abbigliamento.prototype.arrotonda = function () {
        return Math.round(this.getsaldocapo() * 10) / 10;
    };
    return Abbigliamento;
}());
;
var capi;
fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f').then(function (response) {
    return response.json();
}).then(function (json) {
    capi = json;
    console.log(capi);
    var cardigan = new Abbigliamento(capi[0].id, capi[0].codprod, capi[0].codprod, capi[0].capo, capi[0].modello, capi[0].quantita, capi[0].colore, capi[0].prezzoivainclusa, capi[0].prezzoivaesclusa, capi[0].disponibile, capi[0].saldo);
    console.log(cardigan.getsaldocapo());
    console.log(cardigan.getacquistocapo());
    console.log(cardigan.collezione);
    console.log("il costo del capo scontato è: € " + cardigan.arrotonda());
    var titolo1 = document.getElementById('titolo1').innerHTML = cardigan.capo;
    var prezzo1 = document.getElementById('prezzo1').innerHTML = 'il prezzo è €' + cardigan.arrotonda();
    var tshirt = new Abbigliamento(capi[1].id, capi[1].codprod, capi[1].codprod, capi[1].capo, capi[1].modello, capi[1].quantita, capi[1].colore, capi[1].prezzoivainclusa, capi[1].prezzoivaesclusa, capi[1].disponibile, capi[1].saldo);
    console.log(tshirt.getsaldocapo());
    console.log(tshirt.getacquistocapo());
    console.log("il costo del capo scontato è: € " + tshirt.arrotonda());
    var titolo2 = document.getElementById('titolo2').innerHTML = tshirt.capo;
    var prezzo2 = document.getElementById('prezzo2').innerHTML = 'il prezzo è €' + tshirt.arrotonda();
    var felpa = new Abbigliamento(capi[2].id, capi[2].codprod, capi[2].codprod, capi[2].capo, capi[2].modello, capi[2].quantita, capi[2].colore, capi[2].prezzoivainclusa, capi[2].prezzoivaesclusa, capi[2].disponibile, capi[2].saldo);
    console.log(felpa.getsaldocapo());
    console.log(felpa.getacquistocapo());
    console.log("il costo del capo scontato è: € " + felpa.arrotonda());
    var titolo3 = document.getElementById('titolo3').innerHTML = felpa.capo;
    var prezzo3 = document.getElementById('prezzo3').innerHTML = 'il prezzo è €' + felpa.arrotonda();
    var maglione = new Abbigliamento(capi[0].id, capi[0].codprod, capi[0].codprod, capi[0].capo, capi[0].modello, capi[0].quantita, capi[0].colore, capi[0].prezzoivainclusa, capi[0].prezzoivaesclusa, capi[0].disponibile, capi[0].saldo);
    console.log(maglione.getsaldocapo());
    console.log(maglione.getacquistocapo());
    console.log("il costo del capo scontato è: € " + maglione.arrotonda());
    console.log(maglione.capo);
    var titolo4 = document.getElementById('titolo4').innerHTML = maglione.capo;
    var prezzo4 = document.getElementById('prezzo4').innerHTML = 'il prezzo è €' + maglione.arrotonda();
    var maglia = new Abbigliamento(capi[0].id, capi[0].codprod, capi[0].codprod, capi[0].capo, capi[0].modello, capi[0].quantita, capi[0].colore, capi[0].prezzoivainclusa, capi[0].prezzoivaesclusa, capi[0].disponibile, capi[0].saldo);
    console.log(maglia.getsaldocapo());
    console.log(maglia.getacquistocapo());
    console.log("il costo del capo scontato è: € " + maglia.arrotonda());
    var titolo5 = document.getElementById('titolo5').innerHTML = maglia.capo;
    var prezzo5 = document.getElementById('prezzo5').innerHTML = 'il prezzo è €' + maglia.arrotonda();
});
