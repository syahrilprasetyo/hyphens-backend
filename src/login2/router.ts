import { Router } from "express";
import LoginController from "./Controller";


export const loginnRouter = Router();

loginnRouter.post('/', LoginController)
