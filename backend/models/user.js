import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dbStatus: Boolean,
  role: { type: mongoose.Schema.ObjectId, ref: "pet" },
  dbStatus:Boolean,
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model.Schema("users", schema);

export default user;