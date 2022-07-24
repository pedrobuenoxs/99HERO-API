import { Request, Response } from "express";
import { GetOneHeroService } from "../services/getonehero.service";

export class GetOneHeroController {
  constructor(private service: GetOneHeroService) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const allHeroes = await this.service.handle(Number(id));
      return res.status(200).json(allHeroes);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
