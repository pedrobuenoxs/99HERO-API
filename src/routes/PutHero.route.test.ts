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
        name: "Steve Rogerinho",
        heroName: "Capitão América",
        cities: ["New York"],
        disasters: ["Assalto a bancos", "desastres naturais"],
        teamwork: "Não",
      });

    expect(await response.statusCode).toBe(200);
    expect(await response.body).toMatchObject({ message: "Success" });
  });

  test("Should return 400 if id is not provided", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        name: "Steve Rogers",
        heroName: "Capitão América",
        cities: ["New York"],
        disasters: ["Assalto a bancos", "desastres naturais"],
        teamwork: "Não",
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Id é obrigatório");
  });
  test("Should return 400 if name is not provided", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        id: 1658458923250,
        heroName: "Capitão América",
        cities: ["New York"],
        disasters: ["Assalto a bancos", "desastres naturais"],
        teamwork: "Não",
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Nome é obrigatório");
  });
  test("Should return 400 if heroName is not provided", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        id: 1658458923250,
        name: "Steve Rogers",
        cities: ["New York"],
        disasters: ["Assalto a bancos", "desastres naturais"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Codinome é obrigatório");
  });
  test("Should return 400 if cities is not provided", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        id: 1658458923250,
        name: "Steve Rogers",
        heroName: "Capitão América",
        disasters: ["Assalto a bancos", "desastres naturais"],
        teamwork: "Não",
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Cidades é obrigatório");
  });
  test("Should return 400 if disasters is not provided", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        id: 1658458923250,
        name: "Steve Rogers",
        heroName: "Capitão América",
        cities: ["New York"],
        teamwork: "Não",
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Desastres é obrigatório");
  });
  test("Should return 400 if teamwork is not provided", async () => {
    const response = await request(app)
      .put("/api/hero")
      .send({
        id: 1658458923250,
        name: "Steve Rogers",
        heroName: "Capitão América",
        cities: ["New York"],
        disasters: ["Assalto a bancos", "desastres naturais"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Teamwork é obrigatório");
  });
  test("Should return 400 if disasters is not valid", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        heroName: "the_hero",
        cities: ["Tóquio", "New York", "Rio de Janeiro"],
        disasters: ["anyDisaster", "anyDisaster"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Desastres inválidos");
  });

  test("Should return 400 if cities is not valid", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        heroName: "the_hero",
        cities: ["Anywhere", "Anywhere"],
        disasters: [
          "Assalto a bancos",
          "monstros gigantes",
          "desastres naturais",
        ],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Cidades inválidas");
  });
});
