import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";

const userRoutes = Router();

userRoutes.get("/", authenticate, getAllUsers);
userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);

export default userRoutes;
