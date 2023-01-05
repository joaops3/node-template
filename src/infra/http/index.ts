import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`app is running on http://localhost:${process.env.PORT}`);
});
