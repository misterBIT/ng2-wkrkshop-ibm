export class PetModel {
  id : number;
  name : string;
  awake : boolean = false;

  static maxId : number = 0;

  constructor(name = '') {
    this.name = name;
    this.id = ++PetModel.maxId;
  }

  toString() {
    return this.name;
  }

  get imgUrl() {
    return `img/pet/${this.id}.png`;
  }

  toggle() {
    this.awake = !this.awake;
  }


}


