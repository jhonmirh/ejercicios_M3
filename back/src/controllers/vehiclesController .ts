import { json, Request, Response } from "express";
import { createVehicleService, getVehicleService } from "../services/vehicleService";
import { Vehicle } from "../entities/vehicle";

export const createVehicles = async (req: Request, res: Response) => {
  const { bannd, color, model, year, userId } = req.body;
  const newVehicle: Vehicle = await createVehicleService({ bannd, color, model, year, userId });
  res.status(201).json(newVehicle);
};
export const getVehicles = async (req: Request, res: Response) => {
  const vehicles: Vehicle[] = await getVehicleService();
  res.status(200).json(vehicles);
};

