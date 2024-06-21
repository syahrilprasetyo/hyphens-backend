import { Static } from "runtypes";

import addProductService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { addProductRequest } from "./Request";
import { addProductResponse } from "./Response";




export default async function AddProductController(
  req: HyphensRequest<Static<typeof addProductRequest>>,
  res: HyphensResponse<addProductResponse>
) {

  try {

    addProductRequest.check(req.body);

    const data = await addProductService(req.body);
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