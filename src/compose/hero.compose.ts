import { HeroRepository } from "../repository/hero.repository";
import { CreateHeroService } from "../services/RegisterHero.service";
import { CreateHeroController } from "../controllers/RegisterHero.controller";
import { UpdateHeroService } from "../services/updatehero.service";
import { UpdateHeroController } from "../controllers/updatehero.controller";
import { GetAllHeroService } from "../services/getallhero.service";
import { GetAllHeroController } from "../controllers/getallhero.controller";
import { DeleteHeroService } from "../services/deletehero.service";
import { DeleteHeroController } from "../controllers/deleteHero.controller";
import { GetOneHeroService } from "../services/getonehero.service";
import { GetOneHeroController } from "../controllers/getonehero.controller";
const repository = new HeroRepository();
const createHeroService = new CreateHeroService(repository);
const createHeroController = new CreateHeroController(createHeroService);

const updateHero = new UpdateHeroService(repository);
const updateHeroController = new UpdateHeroController(updateHero);

const getAllHero = new GetAllHeroService(repository);
const getAllHeroController = new GetAllHeroController(getAllHero);

const deleteHero = new DeleteHeroService(repository);
const deleteHeroController = new DeleteHeroController(deleteHero);

const getOneHero = new GetOneHeroService(repository);
const getOneHeroController = new GetOneHeroController(getOneHero);

export {
  createHeroController,
  updateHeroController,
  getAllHeroController,
  deleteHeroController,
  getOneHeroController,
};
