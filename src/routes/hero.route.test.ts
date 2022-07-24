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

test("Should return 201 as status code and Success saving a new hero", async () => {
  const response = await request(app)
    .post("/api/hero")
    .send({
      name: "Anything_but_the_name",
      heroName: "AnyHeroName_but_the_name",
      cities: ["Anywhere"],
      disasters: ["anyDisaster"],
      teamwork: "anyTeamwork",
    });

  expect(await response.statusCode).toBe(201);
  expect(await response.body).toMatchObject({ message: "Success" });
});

test("Should return 500 if name is not provided", async () => {
  const response = await request(app)
    .post("/api/hero")
    .send({
      heroName: "AnyHeroName_but_the_name",
      cities: ["Anywhere"],
      disasters: ["anyDisaster"],
      teamwork: "anyTeamwork",
    });

  expect(await response.statusCode).toBe(400);
  expect(await response.body).toEqual("Error: Nome é obrigatório");
});
