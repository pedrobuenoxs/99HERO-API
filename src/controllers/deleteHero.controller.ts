import { Request, Response } from "express";
import { DeleteHeroService } from "../services/deletehero.service";

export class DeleteHeroController {
  constructor(private service: DeleteHeroService) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteHero = await this.service.handle(Number(id));
      return res.status(200).json(deleteHero);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
