import { Static } from "runtypes";
import { productListResponse } from "./Response";
import { productListRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import productListService from "./Service";




export default async function ProductListController(
  req: HyphensRequest<Static<typeof productListRequest>>,
  res: HyphensResponse<productListResponse>
) {

  try {
    productListRequest.check(req.body);

   

    const data = await productListService();
  
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