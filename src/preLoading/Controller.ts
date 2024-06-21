import { Static } from "runtypes";
import { preLoadingRequest } from "./Request";
import {  preLoadingResponse } from "./Response";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";
import preLoadingService from "./Service";


export default async function PreLoadingController(
  req: HyphensRequest<Static<typeof preLoadingRequest>>,
  res: HyphensResponse<preLoadingResponse>
) {

  try {
    preLoadingRequest.check(req.body);

    const data = await preLoadingService(req.body);
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