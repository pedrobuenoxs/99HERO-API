import IHero from "../interfaces/hero.interface";
import heroRecordModel from "../models/hero.model";
import mongoose from "mongoose";

export class HeroRepository {
  async RegisterHero(data: IHero) {
    const record = new heroRecordModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    const save = record.save();
    return save;
  }

  async findByID(user_id: number) {
    return await heroRecordModel.find({ id: user_id });
  }

  async getAllHeroes() {
    return await heroRecordModel.find();
  }
  async deleteOneUser(id: number) {
    return await heroRecordModel.deleteOne({ id: id });
  }
  async deleteAll() {
    return await heroRecordModel.deleteMany({});
  }

  async alreadyExists(heroName: string) {
    return heroRecordModel.find({ heroName: heroName });
  }
  async UpdateHero(data: IHero) {
    return await heroRecordModel.updateOne({ id: data.id }, data);
  }
}
