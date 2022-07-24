import { Router } from "express";
import {
  createHeroController,
  updateHeroController,
  getAllHeroController,
  deleteHeroController,
} from "../compose/hero.compose";
const HeroRouter = Router();
HeroRouter.get("/hero", async (req, res) => {
  getAllHeroController.handle(req, res);
});
HeroRouter.post("/hero", (req, res) => {
  createHeroController.handle(req, res);
});
HeroRouter.put("/hero", (req, res) => {
  updateHeroController.handle(req, res);
});
HeroRouter.delete("hero/:id", async (req, res) => {
  deleteHeroController.handle(req, res);
});

export default HeroRouter;
