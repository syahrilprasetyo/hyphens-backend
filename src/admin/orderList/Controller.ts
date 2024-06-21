import { Static } from "runtypes";

import orderListService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { orderListRequest } from "./Request";
import { orderListResponse } from "./Response";





export default async function OrderListController(
  req: HyphensRequest<Static<typeof orderListRequest>>,
  res: HyphensResponse<orderListResponse>
) {

  try {

    orderListRequest.check(req.body);

    const data = await orderListService(req.body);
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