import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Vehicle } from "../entities/vehicle";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "demo_typeorm",
  // dropSchema:true,
  synchronize: true,
  logging: false,
  entities: [User, Vehicle],
  subscribers: [],
  migrations: [],
});
 
export const userModel = AppDataSource.getRepository(User);
export const vehicleModel = AppDataSource.getRepository(Vehicle);
