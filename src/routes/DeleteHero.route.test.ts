import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
import { HeroRepository } from "../repository/hero.repository";
const Repository = new HeroRepository();
beforeEach(async () => {
  await Repository.RegisterHero({
    id: 1658458923250,
    name: "Steve Rogerinho",
    heroName: "Capitão América",
    cities: ["New York"],
    disasters: ["desastres naturais"],
    teamwork: "Não",
  });
});

afterEach(async () => {
  await Repository.deleteAll();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

describe("Hero DELETE Route", () => {
  test("Should return 200 as status code and Success deleting a hero", async () => {
    const response = await request(app).delete("/api/hero/1658458923250");

    expect(await response.statusCode).toBe(200);
    expect(await response.body).toMatchObject({ message: "Success" });
  });

  test("Should return 404 if id is not provided", async () => {
    const response = await request(app).delete("/api/hero/");

    expect(await response.statusCode).toBe(404);
  });

  test("Should return 404 if id is not found", async () => {
    const response = await request(app).delete("/api/hero/123456789");

    expect(await response.statusCode).toBe(404);
  });
});
