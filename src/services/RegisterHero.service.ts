import DTOHero from "../DTO/hero.dto";
import IHero from "../interfaces/hero.interface";
import { HeroRepository } from "../repository/hero.repository";

export class CreateHeroService {
  constructor(private repository: HeroRepository) {}

  async handle(hero: DTOHero) {
    const { name, heroName, cities, disasters } = hero;
    try {
      if (!name) throw new Error("Nome é obrigatório");
      if (!heroName) throw new Error("Codinome é obrigatório");
      if (!cities) throw new Error("Cidades é obrigatório");
      if (!disasters) throw new Error("Desastres é obrigatório");
    } catch (error) {
      return { message: error.message };
    }
    const newHero: IHero = {
      id: new Date().valueOf(),
      name,
      heroName,
      cities,
      disasters,
      teamwork: "yes",
    };
    const heroRecord = await this.repository.RegisterHero(newHero);

    const newHeroRecord: DTOHero = {
      name: heroRecord.name,
      heroName: heroRecord.heroName,
      cities: heroRecord.cities,
      disasters: heroRecord.disasters,
      teamwork: heroRecord.teamwork,
    };
    return { ...newHeroRecord, message: "Success" };
  }
}
