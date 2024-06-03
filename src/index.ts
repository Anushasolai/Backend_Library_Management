
import express, { Application, Request, Response } from "express";
import { AppDataSource, checkConnection } from "./dbConfig";
import { userRoutes } from "./routes/userRouters";
import { adminRoutes } from "./routes/adminRouters";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 9082;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "success" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  checkConnection();
});
