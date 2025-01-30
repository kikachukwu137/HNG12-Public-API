import { Router } from "express";
import * as userController from '../controller/user.controller.js'

const userRoute = Router()

userRoute.get("/",userController.getUserInfo)


export default userRoute;

