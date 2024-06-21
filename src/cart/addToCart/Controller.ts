import { Static } from "runtypes";


import addToCartService from "./Service";
import { addToCartRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { addToCartResponse } from "./Response";

export default async function AddToCartController(
  req: HyphensRequest<Static<typeof addToCartRequest>>,
  res: HyphensResponse<addToCartResponse>
) {

  try {
    addToCartRequest.check(req.body);

    const data = await addToCartService(req.body);
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