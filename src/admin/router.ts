import { Router } from "express";
import productListController from "./productList/Controller";
import AddProductController from "./addProduct/Controller";
import OrderListController from "./orderList/Controller";
import OrderDetailController from "./orderDetail/Controller";
import OrderUpdateController from "./orderUpdate/Controller";




export const adminRouter = Router();

adminRouter.post('/ProductList', productListController)
adminRouter.post('/AddProduct', AddProductController)
adminRouter.post('/OrderList', OrderListController)
adminRouter.post('/OrderDetail', OrderDetailController)
adminRouter.post('/UpdateOrder', OrderUpdateController)