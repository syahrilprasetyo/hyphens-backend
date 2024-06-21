import { Router } from "express";
import { isSignIn } from "../middleware/is_login";
import CheckoutController from "./Controller";


export const checkoutRouter = Router();

checkoutRouter.post('/', isSignIn, CheckoutController)