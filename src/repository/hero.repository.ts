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
    return heroRecordModel.find({ id: user_id });
  }

  async findAll() {
    return heroRecordModel.find();
  }
  async deleteOneUser(id: number) {
    return await heroRecordModel.deleteOne({ id: id });
  }
  async deleteAll() {
    return await heroRecordModel.deleteMany({});
  }
}
