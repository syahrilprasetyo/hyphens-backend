import { Static } from "runtypes";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";
import { checkoutResponse } from "./Response";
import { checkoutRequest } from "./Request";
import checkoutService from "./Service";




export default async function CheckoutController(
  req: HyphensRequest<Static<typeof checkoutRequest>>,
  res: HyphensResponse<checkoutResponse>
) {

  try {

    checkoutRequest.check(req.body);

    const data = await checkoutService(req.body);
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