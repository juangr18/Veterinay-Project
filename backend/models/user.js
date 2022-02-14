import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dbStatus: Boolean,
  pet: { type: mongoose.Schema.ObjectId, ref: "pet" },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("users", schema);

export default user;
