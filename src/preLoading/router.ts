import { Router } from "express";

import OrderReceiptController from "./Controller";
import { isSignIn } from "../middleware/is_login";
import PreLoadingController from "./Controller";



export const preLoadingRouter = Router();

preLoadingRouter.post('/', isSignIn, PreLoadingController)