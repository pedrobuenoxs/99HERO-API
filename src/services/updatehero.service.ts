import DTOHero from "../DTO/hero.dto";
import { HeroRepository } from "../repository/hero.repository";
import { Hero } from "../helpers/createHero.helpers";
export class UpdateHeroService {
  constructor(private repository: HeroRepository) {}

  async handle(hero: DTOHero) {
    const { id, name, heroName, cities, disasters, teamwork } = hero;

    try {
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
