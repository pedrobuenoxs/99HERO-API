import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
import DTOHero from "../DTO/hero.dto";
import { HeroRepository } from "../repository/hero.repository";
const Repository = new HeroRepository();
beforeAll((done) => {
  done();
});
afterEach(async () => {
  await Repository.deleteAll();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

describe("Hero GET Route", () => {
  test("Should return 200 as status code and list all heros without name", async () => {
    const response = await request(app).get("/api/hero");
    response.body.forEach((hero: DTOHero) => {
      expect(hero).toHaveProperty("id");
      expect(hero).not.toHaveProperty("name");
      expect(hero).toHaveProperty("heroName");
      expect(hero).toHaveProperty("cities");
      expect(hero).toHaveProperty("disasters");
      expect(hero).toHaveProperty("teamwork");
    });
    expect(await response.statusCode).toBe(200);
  });
});
