import { Static } from "runtypes";
import { orderReceiptRequest } from "./Request";
import {  orderReceiptResponse } from "./Response";
import orderReceiptService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";

export default async function OrderReceiptController(
  req: HyphensRequest<Static<typeof orderReceiptRequest>>,
  res: HyphensResponse<orderReceiptResponse>
) {

  try {
    orderReceiptRequest.check(req.body);

    const data = await orderReceiptService(req.body);
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