import express from "express"
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

app.use(cors({
  origin:"http://localhost:8080",
  credentials: true
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.use("/api", authRoutes);

export default app;



