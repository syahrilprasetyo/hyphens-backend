import { Router } from "express";
import { isSignIn } from "../middleware/is_login";
import AddAddressController from "./addAddress/Controller";
import AddressListController from "./list/Controller";


export const addressRouter = Router();

addressRouter.post('/Add', isSignIn, AddAddressController)
addressRouter.post('/List', isSignIn, AddressListController)