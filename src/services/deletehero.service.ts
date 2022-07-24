import { HeroRepository } from "../repository/hero.repository";
export class DeleteHeroService {
  constructor(private repository: HeroRepository) {}

  async handle(id: number) {
    try {
      if (!id) throw new Error("Id é obrigatório");
      const deleteHero = await this.repository.deleteOneHero(id);
      if (deleteHero.deletedCount === 0) throw new Error("Hero não encontrado");

      return { message: "Success" };
    } catch (error) {
      throw new Error(error);
    }
  }
}
