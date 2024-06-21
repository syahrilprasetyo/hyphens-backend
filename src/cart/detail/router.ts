import { Router } from "express";
import LoginController from "./Controller";
import AddToCartController from "./Controller";
import { isSignIn } from "../../middleware/is_login";
import CartDetailController from "./Controller";

export const cartDetailRouter = Router();

cartDetailRouter.post('/', isSignIn, CartDetailController)