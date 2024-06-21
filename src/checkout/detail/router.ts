import { Router } from "express";
import { isSignIn } from "../../middleware/is_login";
import CheckoutDetailController from "./Controller";


export const checkoutDetailRouter = Router();

checkoutDetailRouter.post('/', isSignIn, CheckoutDetailController)