import { HeroRepository } from "../repository/hero.repository";
import { CreateHeroService } from "../services/RegisterHero.service";
import { CreateHeroController } from "../controllers/RegisterHero.controller";
import { UpdateHeroService } from "../services/updatehero.service";
import { UpdateHeroController } from "../controllers/updatehero.controller";
import { GetAllHeroService } from "../services/getallhero.service";
import { GetAllHeroController } from "../controllers/getallhero.controller";
const repository = new HeroRepository();
const createHeroService = new CreateHeroService(repository);
const createHeroController = new CreateHeroController(createHeroService);

const updateHero = new UpdateHeroService(repository);
const updateHeroController = new UpdateHeroController(updateHero);

const getAllHero = new GetAllHeroService(repository);
const getAllHeroController = new GetAllHeroController(getAllHero);

export { createHeroController, updateHeroController, getAllHeroController };
