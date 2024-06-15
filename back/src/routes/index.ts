import { Router } from "express";
import {
  createUser,
  getUser,
  deleteUser,
  getUserById,
} from "../controllers/usersController";
import {  createVehicles,
  getVehicles} from "../controllers/vehiclesController "
import auth from "../middlewares/auth";

const router: Router = Router();

router.get("/users", getUser);
router.post("/users", createUser);
router.post("/users/:id", getUserById);
router.delete("/users", deleteUser);
router.get("/vehicles", getVehicles);
router.post("/vehicles", createVehicles);
export default router;
