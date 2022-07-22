import { Router } from "express";
import { HeroRepository } from "../repository/hero.repository";
import {
  createHeroController,
  updateHeroController,
} from "../compose/hero.compose";
const HeroRouter = Router();
const repository = new HeroRepository();
HeroRouter.get("/", async (req, res) => {
  const all = await repository.findAll();
  res.json(all);
});
HeroRouter.post("/", (req, res) => {
  createHeroController.handle(req, res);
});
HeroRouter.put("/", (req, res) => {
  updateHeroController.handle(req, res);
});
HeroRouter.delete("/", async (req, res) => {
  // const deleted = await repository.deleteAll();
  // res.json(deleted);
});

export default HeroRouter;
