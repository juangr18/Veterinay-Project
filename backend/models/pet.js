import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  race: String,
  weight: Number,
  height: Number,
  Health: String,
  age: Number,
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const pet = mongoose.model("pet", schema);

export default pet;
