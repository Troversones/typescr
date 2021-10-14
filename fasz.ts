class Ember {
  szemekSzama: number;
  nev: string;

  constructor(nev: string) {
    this.szemekSzama = 2;
    this.nev = nev;
  }
}
class Boxolo extends Ember {
  
  constructor(nev: string) {
    super(nev);
  }
}
var boxos = new Boxolo("Géza");
console.log(boxos);
class Faszomataphpba extends Boxolo {
  Félszemű: string;
  constructor(Félszemű: string) {
    super(Félszemű);
  }
}
