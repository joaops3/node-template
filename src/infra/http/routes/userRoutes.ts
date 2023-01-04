import router from "express";
import userController from "../../../app/controllers/user.controller";

export const userRoutes = router();

userRoutes.post("/user", userController.create);
userRoutes.get("/user/:id", userController.findOne);
