interface IEmber {
  hajszin: string;
  koszones() : void;
}
class Ember implements IEmber{
  szemekSzama: number;
  nev: string;
  hajszin: string;
  koszones():void{
    console.log(`Szia, ${this.nev} vagyok.`);
  }
  constructor(nev: string) {
    this.szemekSzama = 2;
    this.nev = nev;
  }
}
class Boxolo extends Ember {
  
  constructor(nev: string) {
    super(nev);
    this.koszones();
  }
}
var boxos = new Boxolo("Géza");
console.log(boxos);
class Lacika extends Boxolo {
  Sárgalapos: boolean;
  constructor() {
    super('Lacika');
    this.Sárgalapos = Math.random() > 0.5;
  }
  koszones():void{
    console.log(`Csá tesám, van egy százasod?`);
  }
}
var lacika = new Lacika();
console.log(lacika);
var boxolo = new Boxolo("Géza");
