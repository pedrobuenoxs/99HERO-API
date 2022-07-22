import { Router } from "express";
import { HeroRepository } from "../repository/hero.repository";
import { CreateHeroService } from "../services/RegisterHero.service";
import { CreateHeroController } from "../controllers/RegisterHero.controller";
import DTOHero from "../DTO/hero.dto";
const repository = new HeroRepository();
const createHeroService = new CreateHeroService(repository);
const createHeroController = new CreateHeroController(createHeroService);

const HeroRouter = Router();

HeroRouter.get("/", async (req, res) => {
  const all = await repository.findAll();
  res.json(all);
});
HeroRouter.post("/", (req, res) => {
  createHeroController.handle(req, res);
});
HeroRouter.put("/", (req, res) => {
  res.json("oi");
});
HeroRouter.delete("/", async (req, res) => {
  const deleted = await repository.deleteAll();
  res.json(deleted);
});

export default HeroRouter;
