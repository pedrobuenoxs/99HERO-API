import { HeroRepository } from "../repository/hero.repository";
import { CreateHeroService } from "../services/RegisterHero.service";
import { CreateHeroController } from "../controllers/RegisterHero.controller";
import { UpdateHeroService } from "../services/updatehero.service";
import { UpdateHeroController } from "../controllers/updatehero.controller";
const repository = new HeroRepository();
const createHeroService = new CreateHeroService(repository);
const createHeroController = new CreateHeroController(createHeroService);

const updateHero = new UpdateHeroService(repository);
const updateHeroController = new UpdateHeroController(updateHero);

export { createHeroController, updateHeroController };
