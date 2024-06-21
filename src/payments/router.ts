import { Router } from "express";
import LoginController from "./Controller";
import AddToCartController from "./Controller";
import { isSignIn } from "../middleware/is_login";
import OrderController from "./Controller";
import PaymentsController from "./Controller";


export const paymentsRouter = Router();

paymentsRouter.post('/', isSignIn, PaymentsController)