import { Router } from "express";
import showMessagesController from "./show/controller";
import createMessagesController from "./create/controller";
import chatListController from "./chat_list/controller";
import dokterListController from "./dokter_list.ts/controller";


export const messageRouter = Router();

messageRouter.post('/ShowMessages', showMessagesController)
messageRouter.post('/Create', createMessagesController)
messageRouter.post('/ChatList', chatListController)
messageRouter.post('/DokterList', dokterListController)