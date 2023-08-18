import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import mongoose from "mongoose";
import registerRoutes from "./routes/user.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);
app.use("/api/register", registerRoutes);

mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Listening on port ', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
