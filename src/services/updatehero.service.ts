import DTOHero from "../DTO/hero.dto";
import { HeroRepository } from "../repository/hero.repository";
import { Hero } from "../helpers/createHero.helpers";
import { disastersValidator } from "../helpers/disastersValidator.helpers";
import { citiesValidator } from "../helpers/citiesValidator.helpers";
export class UpdateHeroService {
  constructor(private repository: HeroRepository) {}

  async handle(hero: DTOHero) {
    const { id, name, heroName, cities, disasters, teamwork } = hero;

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
      if (!teamwork) throw new Error("Teamwork é obrigatório");
      if (!id) throw new Error("Id é obrigatório");
      const newHero = new Hero(
        id!,
        name!,
        heroName,
        cities,
        disasters,
        teamwork
      );
      await this.repository.UpdateHero(newHero);

      return { ...newHero, message: "Success" };
    } catch (error) {
      throw new Error(error);
    }
  }
}
