import { Router } from "express";
import {
  createHeroController,
  updateHeroController,
  getAllHeroController,
  deleteHeroController,
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
HeroRouter.delete("/:id", async (req, res) => {
  deleteHeroController.handle(req, res);
});

export default HeroRouter;
