import { Static } from "runtypes";

import orderUpdateService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { orderUpdateRequest } from "./Request";
import { orderUpdateResponse } from "./Response";






export default async function OrderUpdateController(
  req: HyphensRequest<Static<typeof orderUpdateRequest>>,
  res: HyphensResponse<orderUpdateResponse>
) {

  try {

    orderUpdateRequest.check(req.body);

    const data = await orderUpdateService(req.body);
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