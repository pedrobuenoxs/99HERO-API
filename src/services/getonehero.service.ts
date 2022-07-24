import DTOHero from "../DTO/hero.dto";
import { HeroRepository } from "../repository/hero.repository";
export class GetOneHeroService {
  constructor(private repository: HeroRepository) {}

  async handle(id: number) {
    try {
      const findHero = await this.repository.findByID(id);
      if (findHero.length < 1) {
        throw new Error("Herói não encontrado");
      }
      const hero: DTOHero[] = findHero.map((hero) => {
        return {
          id: hero.id,
          heroName: hero.heroName,
          cities: hero.cities,
          disasters: hero.disasters,
          teamwork: hero.teamwork,
        };
      });
      return hero[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}
