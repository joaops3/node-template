import express, { ErrorRequestHandler, json } from "express";
import "express-async-errors";
import { HttpError } from "../../app/errors/httpError";
import path from "path";
import { userRoutes } from "./routes";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../../public")));

app.use(userRoutes);

const handleErrors: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  } else if (!err.status) {
    res.status(500).json({ message: "Request Error" });
  }
};

app.use(handleErrors);
