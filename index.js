import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import eventRouter from "./routes/eventRoutes.js";
import teamRouter from "./routes/teamRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/events" , eventRouter);
app.use("/team" , teamRouter);

mongoose
  .connect(
    "mongodb+srv://soumyarajbag:bag9102003@cluster0.ju9slpn.mongodb.net/Igniters?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  }).then(()=>{
    console.log("Connected to Database");
  }).catch((err)=>{
    console.log(err);
  });
