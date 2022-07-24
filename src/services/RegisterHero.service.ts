import DTOHero from "../DTO/hero.dto";
import { HeroRepository } from "../repository/hero.repository";
import { Hero } from "../helpers/createHero.helpers";
import { disastersValidator } from "../helpers/disastersValidator.helpers";
import { citiesValidator } from "../helpers/citiesValidator.helpers";
export class CreateHeroService {
  constructor(private repository: HeroRepository) {}

  async handle(hero: DTOHero) {
    const { name, heroName, cities, disasters, teamwork } = hero;
    try {
      if (!name) throw new Error("Nome é obrigatório");
      if (!heroName) throw new Error("Codinome é obrigatório");
      if (!cities) throw new Error("Cidades é obrigatório");
      if (!disasters) throw new Error("Desastres é obrigatório");
      if (name === heroName)
        throw new Error("Nome e Codinome não podem ser iguais");
      if (!disastersValidator(disasters))
        throw new Error("Desastres inválidos");
      if (!citiesValidator(cities)) throw new Error("Cidades inválidas");
      const id: number = new Date().valueOf();
      const newHero = new Hero(id, name, heroName, cities, disasters, teamwork);
      const alreadyExists = await this.repository.alreadyExists(
        newHero.heroName
      );

      if (alreadyExists.length > 0) {
        throw new Error("Já existe um herói com esse codinome");
      }

      const heroRecord = await this.repository.RegisterHero(newHero);

      const newHeroRecord: DTOHero = {
        name: heroRecord.name,
        heroName: heroRecord.heroName,
        cities: heroRecord.cities,
        disasters: heroRecord.disasters,
        teamwork: heroRecord.teamwork,
      };
      return { ...newHeroRecord, message: "Success" };
    } catch (error) {
      throw new Error(error);
    }
  }
}
