import { Static } from "runtypes";


import cartDetailService from "./Service";
import { cartDetailRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { cartDetailResponse } from "./Response";

export default async function CartDetailController(
  req: HyphensRequest<Static<typeof cartDetailRequest>>,
  res: HyphensResponse<cartDetailResponse>
) {

  try {
    cartDetailRequest.check(req.body);

    const data = await cartDetailService(req.body);
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