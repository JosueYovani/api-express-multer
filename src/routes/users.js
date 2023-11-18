// api + /users

import express from "express";
import { createNewUser } from "../controllers/users";

const router = express.Router();

router.post("/", createNewUser);

export default router;
