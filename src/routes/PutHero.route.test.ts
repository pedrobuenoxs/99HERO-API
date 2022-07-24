import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
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
describe("Hero PUT Route", () => {
  test("Should return 200 as status code and Success saving a new hero", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        id: 1658458923250,
        name: "Steve Rogers",
        heroName: "Capitão América",
        cities: ["New York"],
        disasters: ["assalto a bancos", "desastres naturais"],
        teamwork: "Não",
      });

    expect(await response.statusCode).toBe(200);
    expect(await response.body).toMatchObject({ message: "Success" });
  });
});
