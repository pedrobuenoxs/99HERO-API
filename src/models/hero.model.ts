import mongoose, { Schema } from "mongoose";
import IHero from "../interfaces/hero.interface";

const UserRecordSchema: Schema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    heroName: { type: String },
    cities: { type: Array },
    disasters: { type: Array },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IHero>("userRecordModel", UserRecordSchema);
