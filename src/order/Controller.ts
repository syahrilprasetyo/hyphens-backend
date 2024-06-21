import { Static } from "runtypes";
import { orderRequest } from "./Request";
import {  orderResponse } from "./Response";
import orderService from "./Service";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";

export default async function OrderController(
  req: HyphensRequest<Static<typeof orderRequest>>,
  res: HyphensResponse<orderResponse>
) {

  try {
    orderRequest.check(req.body);

    const data = await orderService(req.body);
    res.status(200).send({
      resultCd: 200,
      message: 'success',
      result: true,
      data: data
    });
  } catch (e: any) { 
    res.status(500).send({
      resultCd: 500,
      message: `${e.message}`,
      result: false
    });
  }
  
}