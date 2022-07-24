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
describe("Hero POST Route", () => {
  test("Should return 201 as status code and Success saving a new hero", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        heroName: "the_heroName",
        cities: ["Tóquio", "New York", "Rio de Janeiro"],
        disasters: [
          "Assalto a bancos",
          "monstros gigantes",
          "desastres naturais",
        ],
      });

    expect(await response.statusCode).toBe(201);
    expect(await response.body).toMatchObject({ message: "Success" });
  });

  test("Should return 400 if name is not provided", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        heroName: "the_hero",
        cities: ["Anywhere"],
        disasters: ["anyDisaster"],
        teamwork: "anyTeamwork",
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Nome é obrigatório");
  });

  test("Should return 400 if heroName is not provided", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        cities: ["Anywhere"],
        disasters: ["anyDisaster"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Codinome é obrigatório");
  });

  test("Should return 400 if cities is not provided", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        heroName: "the_hero",
        disasters: ["anyDisaster"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Cidades é obrigatório");
  });

  test("Should return 400 if disasters is not provided", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        heroName: "the_hero",
        cities: ["Anywhere"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual("Error: Desastres é obrigatório");
  });

  test("Should return 400 if name and heroName are the same", async () => {
    const response = await request(app)
      .post("/api/hero")
      .send({
        name: "the_Name",
        heroName: "the_Name",
        cities: ["Anywhere"],
        disasters: ["anyDisaster"],
      });

    expect(await response.statusCode).toBe(400);
    expect(await response.body).toEqual(
      "Error: Nome e Codinome não podem ser iguais"
    );
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
