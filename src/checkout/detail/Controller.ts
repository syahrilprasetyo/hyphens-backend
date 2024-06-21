import { Static } from "runtypes";
import { checkoutDetailResponse } from "./Response";
import { checkoutDetailRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import checkoutDetailService from "./Service";




export default async function CheckoutDetailController(
  req: HyphensRequest<Static<typeof checkoutDetailRequest>>,
  res: HyphensResponse<checkoutDetailResponse>
) {

  try {
    checkoutDetailRequest.check(req.body);

    const data = await checkoutDetailService(req.body);
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