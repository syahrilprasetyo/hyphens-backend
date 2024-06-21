import { Router } from "express";
import RegistrationController from "./Controller";

export const registrationRouter = Router();

registrationRouter.post('/submit', RegistrationController)