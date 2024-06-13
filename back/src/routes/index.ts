import { Router } from "express";
import {
  createUser,
  getUser,
  deleteUser,
  getUserById,
} from "../controllers/usersController";
import auth from "../middlewares/auth";

const router: Router = Router();

router.get("/users", getUser);
router.post("/users", createUser);
router.post("/users/:id", getUserById);
router.delete("/users", deleteUser);

export default router;
