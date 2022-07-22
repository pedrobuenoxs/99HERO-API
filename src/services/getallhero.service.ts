import DTOHero from "../DTO/hero.dto";
import { HeroRepository } from "../repository/hero.repository";
import { Hero } from "../helpers/createHero.helpers";
export class GetAllHeroService {
  constructor(private repository: HeroRepository) {}

  async handle() {
    try {
      const findAllHeroes = await this.repository.getAllHeroes();

      const allHeroes: DTOHero[] = findAllHeroes.map((hero) => {
        return {
          heroName: hero.heroName,
          cities: hero.cities,
          disasters: hero.disasters,
          teamwork: hero.teamwork,
        };
      });
      return allHeroes;
    } catch (error) {
      return { message: error.message };
    }
  }
}
