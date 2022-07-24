import { Router } from "express";
import {
  createHeroController,
  updateHeroController,
  getAllHeroController,
  deleteHeroController,
  getOneHeroController,
} from "../compose/hero.compose";
const HeroRouter = Router();
HeroRouter.get("/hero", async (req, res) => {
  getAllHeroController.handle(req, res);
});
HeroRouter.get("/hero/:id", async (req, res) => {
  getOneHeroController.handle(req, res);
});
HeroRouter.post("/hero", (req, res) => {
  createHeroController.handle(req, res);
});
HeroRouter.put("/hero", (req, res) => {
  updateHeroController.handle(req, res);
});
HeroRouter.delete("/hero/:id", (req, res) => {
  deleteHeroController.handle(req, res);
});

export default HeroRouter;
