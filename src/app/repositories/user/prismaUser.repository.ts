import db from "../../../infra/db/db";
import { CreateUserDto } from "../../dtos/create-user.dto";
import { UpdateUserDto } from "../../dtos/update-user.dto";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "./user.repository";

export class PrismaUserRepository implements UserRepository {
  async findById(id: string): Promise<UserEntity | null> {
    const user = await db.user.findFirst({ where: { id } });
    return user;
  }
  async update(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const user = await db.user.update({ where: { id }, data: data });
    return user;
  }
  async create(data: CreateUserDto): Promise<UserEntity> {
    const user = await db.user.create({ data: { ...data, updated_at: new Date() } });
    return user;
  }
}
