import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import eventRouter from "./routes/eventRoutes.js";
import teamRouter from "./routes/teamRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Request got by Unstop Igniters Club of RCCIIT .");
});
app.use(express.json());
app.use(cors({
  origin : "*",
}));
app.use("/events" , eventRouter);
app.use("/team" , teamRouter);

const mongooseUri = process.env.MONGO_URI || "default_fallback_uri"
mongoose
  .connect(mongooseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Your Server is running");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
