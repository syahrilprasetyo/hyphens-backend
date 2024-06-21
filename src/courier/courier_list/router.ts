import { Router } from "express";
import CourierListController from "./Controller";
import { isSignIn } from "../../middleware/is_login";


export const courierListRouter = Router();

courierListRouter.post('/List', isSignIn, CourierListController)