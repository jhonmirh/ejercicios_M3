import Iuser from "../interfaces/User";
import UserDto from "../dto/UserDto";
import { promises } from "dns";
import { AppDataSource, userModel } from "../config/data-source";
import { User } from "../entities/user";
let users: Iuser[] = [
  { id: 1, name: "Jhon", email: "userData.email", age:45, active: true },
];
let id: number = 2;
export const createUserService = async (userData: UserDto) => {
  const user = await userModel.create(userData);
  const result=await userModel.save(user);
  return user;  
};
export const getUserService = async ():Promise<User[]>=> {
  const users = await userModel.find();
  return users;
  };
  export const getUserByIdService =async(id:number):Promise<User|null>=>{
  const user=await userModel.findOneBy({
    id
  })
  return user;
}
export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: Iuser) => {
    return user.id !== id;
  });
};
