import { CreateUserDto } from "./create-user.dto";

//Omit<type, 'value'> - create new type without the omited value

//Pick<type, 'value | value2'> - create new Type with only the value

export interface UpdateUserDto extends Partial<Omit<CreateUserDto, "password">> {}
