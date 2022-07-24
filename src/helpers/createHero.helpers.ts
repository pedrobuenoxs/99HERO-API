import IHero from "../interfaces/hero.interface";

export class Hero implements IHero {
  id: number;
  name: string;
  heroName: string;
  cities: [string];
  disasters: [string];
  teamwork: string;
  constructor(
    id: number,
    name: string,
    heroName: string,
    cities: [string],
    disasters: [string],
    teamwork: string
  ) {
    this.id = id;
    this.name = name;
    this.heroName = heroName;
    this.cities = cities;
    this.disasters = disasters;
    this.teamwork = teamwork || "Indiferente";
  }
}
