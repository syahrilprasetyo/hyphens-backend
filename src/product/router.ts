import { Router } from "express";
import ProductListController from "./list/Controller";
import ProductDetalController from "./detail/Controller";

export const productRouter = Router();

productRouter.post('/List', ProductListController);
productRouter.post('/Detail', ProductDetalController);