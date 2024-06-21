import { Router } from "express";
import LoginDokterController from "./Controller";

export const loginDokterRouter = Router();

loginDokterRouter.post('/', LoginDokterController)