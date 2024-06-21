import { Static } from "runtypes";

import orderDetailService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { orderDetailRequest } from "./Request";
import { orderDetailResponse } from "./Response";






export default async function OrderDetailController(
  req: HyphensRequest<Static<typeof orderDetailRequest>>,
  res: HyphensResponse<orderDetailResponse>
) {

  try {

    orderDetailRequest.check(req.body);

    const data = await orderDetailService(req.body);
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