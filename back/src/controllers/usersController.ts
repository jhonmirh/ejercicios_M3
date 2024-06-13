import { json, Request, Response } from "express";
import Iuser from "../interfaces/User";
import {
  createUserService,
  getUserService,
  deleteUserService,
  getUserByIdService,
} from "../services/userService";
import { User } from "../entities/user";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, age, active } = req.body;
  const newUser: User = await createUserService({ name, email, age, active });
  res.status(201).json(newUser);
};
export const getUser = async (req: Request, res: Response) => {
  const users: User[] = await getUserService();
  res.status(200).json(users);
};
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | null = await getUserByIdService(Number(id));
  res.status(200).json(user);
};
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteUserService(id);
  res.status(200).json({ message: "Eliminado el Usuario" });
};
