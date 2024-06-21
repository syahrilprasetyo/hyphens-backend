import { Static } from "runtypes";

import productListService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { productListRequest } from "./Request";
import { productListResponse } from "./Response";




export default async function productListController(
  req: HyphensRequest<Static<typeof productListRequest>>,
  res: HyphensResponse<productListResponse>
) {

  try {

    productListRequest.check(req.body);

    const data = await productListService(req.body);
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