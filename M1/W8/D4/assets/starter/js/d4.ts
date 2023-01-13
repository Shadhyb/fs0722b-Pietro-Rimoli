class Abbigliamento{
id:number;
codprod:number;
collezione:string;
capo:string;
modello:number;
quantità:number;
colore:string;
prezzoivainclusa:number;
prezzoivaesclusa:number;
disponibile:string;
saldo:number;
constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantità:number,colore:string,prezzoivainclusa:number,prezzoivaesclusa:number,disponibile,saldo:number){
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantità = quantità;
    this.colore = colore;
    this.prezzoivainclusa =prezzoivainclusa;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.disponibile = disponibile;
    this.saldo =saldo
}
getsaldocapo(){
    return this.prezzoivainclusa -((this.prezzoivainclusa/100) * this.saldo)
}
getacquistocapo(){
   return (this.getsaldocapo())*this.quantità

}
arrotonda(){
    return Math.round(this.getsaldocapo()*10)/10
}
};
let capi
  fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f').then(function (response) {
      return response.json();
  }).then(function (json) {
      capi = json;
      console.log(capi);

      
      let cardigan = new Abbigliamento (capi[0].id,capi[0].codprod,capi[0].codprod,capi[0].capo,capi[0].modello,capi[0].quantita,capi[0].colore,capi[0].prezzoivainclusa,capi[0].prezzoivaesclusa,capi[0].disponibile,capi[0].saldo);
      console.log(cardigan.getsaldocapo());
      console.log(cardigan.getacquistocapo());
      console.log(cardigan.collezione)
      console.log("il costo del capo scontato è: € " + cardigan.arrotonda());
      let titolo1= (<HTMLTitleElement>document.getElementById('titolo1')).innerHTML= cardigan.capo ;     
      let prezzo1 =(<HTMLElement>document.getElementById('prezzo1')).innerHTML= 'il prezzo è €' + cardigan.arrotonda();
   
      let tshirt= new Abbigliamento (capi[1].id,capi[1].codprod,capi[1].codprod,capi[1].capo,capi[1].modello,capi[1].quantita,capi[1].colore,capi[1].prezzoivainclusa,capi[1].prezzoivaesclusa,capi[1].disponibile,capi[1].saldo);
      console.log(tshirt.getsaldocapo());
      console.log(tshirt.getacquistocapo());
      console.log("il costo del capo scontato è: € " + tshirt.arrotonda());
      let titolo2= (<HTMLTitleElement>document.getElementById('titolo2')).innerHTML= tshirt.capo;
      let prezzo2 =(<HTMLElement>document.getElementById('prezzo2')).innerHTML= 'il prezzo è €' + tshirt.arrotonda();
     
      let felpa = new Abbigliamento (capi[2].id,capi[2].codprod,capi[2].codprod,capi[2].capo,capi[2].modello,capi[2].quantita,capi[2].colore,capi[2].prezzoivainclusa,capi[2].prezzoivaesclusa,capi[2].disponibile,capi[2].saldo);
      console.log(felpa.getsaldocapo());
      console.log(felpa.getacquistocapo());
      console.log("il costo del capo scontato è: € " + felpa.arrotonda());
      let titolo3= (<HTMLTitleElement>document.getElementById('titolo3')).innerHTML= felpa.capo;
      let prezzo3 =(<HTMLElement>document.getElementById('prezzo3')).innerHTML= 'il prezzo è €' + felpa.arrotonda();
     
      let maglione = new Abbigliamento (capi[0].id,capi[0].codprod,capi[0].codprod,capi[0].capo,capi[0].modello,capi[0].quantita,capi[0].colore,capi[0].prezzoivainclusa,capi[0].prezzoivaesclusa,capi[0].disponibile,capi[0].saldo);
      console.log(maglione.getsaldocapo());
      console.log(maglione.getacquistocapo());
      console.log("il costo del capo scontato è: € " + maglione.arrotonda());
      console.log(maglione.capo)
      let titolo4= (<HTMLTitleElement>document.getElementById('titolo4')).innerHTML= maglione.capo;
      let prezzo4 =(<HTMLElement>document.getElementById('prezzo4')).innerHTML= 'il prezzo è €' + maglione.arrotonda();
     
      let maglia = new Abbigliamento (capi[0].id,capi[0].codprod,capi[0].codprod,capi[0].capo,capi[0].modello,capi[0].quantita,capi[0].colore,capi[0].prezzoivainclusa,capi[0].prezzoivaesclusa,capi[0].disponibile,capi[0].saldo);
      console.log(maglia.getsaldocapo());
      console.log(maglia.getacquistocapo());
      console.log("il costo del capo scontato è: € " + maglia.arrotonda());
      let titolo5= (<HTMLTitleElement>document.getElementById('titolo5')).innerHTML= maglia.capo;
      let prezzo5 =(<HTMLElement>document.getElementById('prezzo5')).innerHTML= 'il prezzo è €' + maglia.arrotonda();
      
          
     }
    
);
  
      

      

     
 