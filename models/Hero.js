export default class Hero {
  heroId: number;
  heroName: string;

  constructor(heroId = "", heroName = "") {
    this.heroId = heroId;
    this.heroName = heroName;
  }

  clone() {
    return new Hero(this.heroId, this.heroName);
  }
}
