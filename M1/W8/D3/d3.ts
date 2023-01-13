abstract  class Tasse {
    tasseinps: number;
    tasseirpef: number;
    constructor(
      tasseinps: number,tasseirpef: number) {
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
   
  }
  
  class commerciante extends Tasse {
    codredd: number;
    redditoannuolordo: number;
  constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
  super(tasseinps,tasseirpef )
  this.codredd = codredd;
  this.redditoannuolordo =redditoannuolordo
  }
  getUtileTasse(){
    return this.redditoannuolordo * this.codredd;
  }
  getTasseInps(){
    return this.redditoannuolordo * this.tasseinps
  }
  getTasseIrpef(){
    return this.redditoannuolordo * this.tasseirpef
  }
  getredditoannuonetto(){
    return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}
class liberoProfessionista extends Tasse {
    codredd: number;
    redditoannuolordo: number;
  constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
  super(tasseinps,tasseirpef )
  this.codredd = codredd;
  this.redditoannuolordo =redditoannuolordo
  }
  getUtileTasse(){
    return this.redditoannuolordo * this.codredd;
  }
  getTasseInps(){
    return this.redditoannuolordo * this.tasseinps
  }
  getTasseIrpef(){
    return this.redditoannuolordo * this.tasseirpef
  }
  getredditoannuonetto(){
    return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}

class artigiano extends Tasse {
    codredd: number;
    redditoannuolordo: number;
  constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
  super(tasseinps,tasseirpef )
  this.codredd = codredd;
  this.redditoannuolordo =redditoannuolordo
  }
  getUtileTasse(){
    return this.redditoannuolordo * this.codredd;
  }
  getTasseInps(){
    return this.redditoannuolordo * this.tasseinps
  }
  getTasseIrpef(){
    return this.redditoannuolordo * this.tasseirpef
  }
  getredditoannuonetto(){
    return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}}



  
  let luca = new commerciante(0.58,20000,0.25, 0.35)
  let mario = new liberoProfessionista(0.78,30000,0.15,0.20)
  let raffaele = new artigiano(0.49, 15000, 0.20, 0.30) 
  console.log("il reddito a netto delle tasse INPS è:" + luca.getTasseInps())
  console.log("il reddito a netto delle tasse IRPEF è:" + luca.getTasseIrpef())
  console.log("l'utile a netto delle tasse è:" + luca.getUtileTasse())
  console.log("il reddito netto è:" + luca.getredditoannuonetto())
  console.log("il reddito a netto delle tasse INPS è:" + mario.getTasseInps())
  console.log("il reddito a netto delle tasse IRPEF è:" + mario.getTasseIrpef())
  console.log("l'utile a netto è:" + mario.getUtileTasse())
  console.log("il reddito netto è:" + mario.getredditoannuonetto())
  console.log("il reddito a netto delle tasse INPS è:" + raffaele.getTasseInps())
  console.log("il reddito a netto delle tasse IRPEF è:"+ raffaele.getTasseIrpef())
  console.log("l'utile a netto delle tasse è:" + raffaele.getUtileTasse())
  console.log("il reddito netto è:" + raffaele.getredditoannuonetto())
  