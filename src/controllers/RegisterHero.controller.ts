import { Request, Response } from "express";
import DTOHero from "../DTO/hero.dto";
import { CreateHeroService } from "../services/RegisterHero.service";
export class CreateHeroController {
  constructor(private service: CreateHeroService) {}
  async handle(req: Request, res: Response) {
    try {
      const hero: DTOHero = req.body;
      const newHero = await this.service.handle(hero);
      return res.status(201).json(newHero);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
