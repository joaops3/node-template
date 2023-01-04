import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserEntity } from "../entities/user.entity";
import { HttpError } from "../errors/httpError";
import { PrismaUserRepository } from "../repositories/user/prismaUser.repository";
import { UserRepository } from "../repositories/user/user.repository";

class UserService {
  constructor(private userRepository: UserRepository) {}
  async create(data: CreateUserDto) {
    if (!data.email) {
      throw new HttpError(400, "Email is Required");
    }
    if (!data.password) {
      throw new HttpError(400, "Password is Required");
    }
    const user = await this.userRepository.create(data);
    if (!user) {
      throw new HttpError(400, "Bad Request");
    }
    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new HttpError(404, "User not found");
    }
    const updated = await this.userRepository.update(id, data);
    if (!updated) {
      throw new HttpError(400, "Bad Request");
    }
    return user;
  }

  async findOne(id: string) {
    if (!id) {
      throw new HttpError(400, "id is required");
    }
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new HttpError(404, "User not found");
    }
    return user;
  }
}

export default new UserService(new PrismaUserRepository());
