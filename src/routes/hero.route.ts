import { Router } from "express";
const HeroRouter = Router();

HeroRouter.get("/", (req, res) => {
  res.json("oi");
});
HeroRouter.post("/", (req, res) => {
  res.json("oi");
});
HeroRouter.put("/", (req, res) => {
  res.json("oi");
});
HeroRouter.delete("/", (req, res) => {
  res.json("oi");
});

export default HeroRouter;
