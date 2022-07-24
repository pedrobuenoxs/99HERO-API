import { Request, Response } from "express";
import { UpdateHeroService } from "../services/updatehero.service";
import DTOHero from "../DTO/hero.dto";

export class UpdateHeroController {
  constructor(private service: UpdateHeroService) {}
  async handle(req: Request, res: Response) {
    try {
      const hero: DTOHero = req.body;
      const newHero = await this.service.handle(hero);
      return res.status(200).json(newHero);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
