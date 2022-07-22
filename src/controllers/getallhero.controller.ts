import { Request, Response } from "express";
import { GetAllHeroService } from "../services/getallhero.service";

export class GetAllHeroController {
  constructor(private service: GetAllHeroService) {}
  async handle(req: Request, res: Response) {
    try {
      const allHeroes = await this.service.handle();
      return res.status(200).json(allHeroes);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
