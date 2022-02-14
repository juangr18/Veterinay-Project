import express from "express";
import cors from "cors";
import db from "./db/db.js";
import pet from "./routes/routePet.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/pet", pet);

app.listen(process.env.PORT, () =>
  console.log("Backend is running on port: ", process.env.PORT)
);

db.connectToDB();