import { Router } from "express";
import LoginController from "./Controller";
import AddToCartController from "./Controller";
import { isSignIn } from "../middleware/is_login";
import OrderController from "./Controller";


export const orderRouter = Router();

orderRouter.post('/', isSignIn, OrderController)