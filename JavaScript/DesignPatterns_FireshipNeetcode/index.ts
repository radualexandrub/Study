class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myHardToKeepTrackOfOptionsLunch = new HotDog("wheat", false, true, true);

const myLunch = new HotDog("gluten free").addKetchup().addMustard().addKraut();
console.log(myLunch);
// HotDog {
//   bread: 'gluten free',
//   ketchup: true,
//   mustard: true,
//   kraut: true
// }
