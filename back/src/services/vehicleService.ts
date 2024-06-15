

import { vehicleModel } from "../config/data-source";
import VehicleDto from "../dto/VehicleDto";
import { Vehicle } from "../entities/vehicle";

export const createVehicleService = async (vehicle: VehicleDto):Promise<Vehicle> => {
  const newVehicle = await vehicleModel.create(vehicle);
  await vehicleModel.save(newVehicle);
  return newVehicle;  
};
export const getVehicleService = async ():Promise<Vehicle[]>=> {
  const vehicles = await vehicleModel.find();
  return vehicles;
  };
