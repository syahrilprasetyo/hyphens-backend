import { Static } from "runtypes";
import { productDetailResponse } from "./Response";
import { productDetailRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import productDetailService from "./Service";




export default async function ProductDetalController(
  req: HyphensRequest<Static<typeof productDetailRequest>>,
  res: HyphensResponse<productDetailResponse>
) {

  try {
    productDetailRequest.check(req.body);

    const data = await productDetailService(req.body);
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