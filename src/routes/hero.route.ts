import { Router } from "express";
import {
  createHeroController,
  updateHeroController,
  getAllHeroController,
} from "../compose/hero.compose";
const HeroRouter = Router();
HeroRouter.get("/", async (req, res) => {
  getAllHeroController.handle(req, res);
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
