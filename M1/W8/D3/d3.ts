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
  console.log("il reddito a netto delle tasse INPS ??:" + luca.getTasseInps())
  console.log("il reddito a netto delle tasse IRPEF ??:" + luca.getTasseIrpef())
  console.log("l'utile a netto delle tasse ??:" + luca.getUtileTasse())
  console.log("il reddito netto ??:" + luca.getredditoannuonetto())
  console.log("il reddito a netto delle tasse INPS ??:" + mario.getTasseInps())
  console.log("il reddito a netto delle tasse IRPEF ??:" + mario.getTasseIrpef())
  console.log("l'utile a netto ??:" + mario.getUtileTasse())
  console.log("il reddito netto ??:" + mario.getredditoannuonetto())
  console.log("il reddito a netto delle tasse INPS ??:" + raffaele.getTasseInps())
  console.log("il reddito a netto delle tasse IRPEF ??:"+ raffaele.getTasseIrpef())
  console.log("l'utile a netto delle tasse ??:" + raffaele.getUtileTasse())
  console.log("il reddito netto ??:" + raffaele.getredditoannuonetto())
  