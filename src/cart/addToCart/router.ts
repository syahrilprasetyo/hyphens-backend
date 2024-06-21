import { Router } from "express";
import AddToCartController from "./Controller";
import { isSignIn } from "../../middleware/is_login";

export const addToCartRouter = Router();

addToCartRouter.post('/', isSignIn, AddToCartController)