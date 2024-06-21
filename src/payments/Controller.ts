import { Static } from "runtypes";
import { paymentsRequest } from "./Request";
import {  paymentsResponse } from "./Response";
import paymentsService from "./Service";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";

export default async function PaymentsController(
  req: HyphensRequest<Static<typeof paymentsRequest>>,
  res: HyphensResponse<paymentsResponse>
) {

  try {
    paymentsRequest.check(req.body);

    const data = await paymentsService(req.body);
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