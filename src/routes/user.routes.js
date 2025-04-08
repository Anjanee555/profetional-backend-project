import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"
import UserController from '../controllers/user.controller.js'

const router = Router()

router.route("/register").post(registerUser)



export default router