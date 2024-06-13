import { DataSource } from "typeorm";
import { User } from "../entities/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "demo_typeorm",
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const userModel = AppDataSource.getRepository(User);
