import { Static } from "runtypes";
import { courierListResponse } from "./Response";
import { courierListRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import courierListService from "./Service";




export default async function CourierListController(
  req: HyphensRequest<Static<typeof courierListRequest>>,
  res: HyphensResponse<courierListResponse>
) {

  try {
    courierListRequest.check(req.body);

    const data = await courierListService(req.body);
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