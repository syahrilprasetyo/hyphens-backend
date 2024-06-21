import { Router } from "express";
import { isSignIn } from "../../middleware/is_login";
import OrderReceiptController from "./Controller";



export const orderReceiptRouter = Router();

orderReceiptRouter.post('/', isSignIn, OrderReceiptController)