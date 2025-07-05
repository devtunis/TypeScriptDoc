import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);


// this  is the controlles





import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
};


import express from "express";
import { createUser, getUsers } from "../controllers/userController";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);

export default router;



import { Request } from "express";

interface CreateUserRequest extends Request {
  body: {
    name: string;
    email: string;
  };
  cookies: {
    token?: string;
  };
}






