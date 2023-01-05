import express, { ErrorRequestHandler, json } from "express";
import "express-async-errors";
import { HttpError } from "../../app/errors/httpError";
import path from "path";
import { userRoutes } from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../utils/swaggerDocument.json";

import { engine } from "express-handlebars";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../../public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(userRoutes);

const handleErrors: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  }
};

app.use(handleErrors);
