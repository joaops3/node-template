import { CreateUserDto } from "../../dtos/create-user.dto";
import { UpdateUserDto } from "../../dtos/update-user.dto";
import { UserEntity } from "../../entities/user.entity";

export interface UserRepository {
  create(data: CreateUserDto): Promise<UserEntity>;
  update(id: string, data: UpdateUserDto): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity | null>;
}
