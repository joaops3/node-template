import { Request, Response } from "express";
import { transporter, sendEmail } from "../libs/mailer";
import userService from "../services/user.service";
import dotenv from "dotenv";

dotenv.config();
export class UserController {
  async create(req: Request, res: Response) {
    await userService.create(req.body);
    res.status(201).send();
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.findOne(id);
    res.status(201).send({ data: user });
  }
}

export default new UserController();
