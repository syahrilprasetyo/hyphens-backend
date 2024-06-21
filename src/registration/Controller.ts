import { Static } from "runtypes";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";
import { registrationRequest } from "./Request";
import { RegistrationResponse } from "./Response";
import RegistrationService from "./Service";

export default async function RegistrationController(
  req: HyphensRequest<Static<typeof registrationRequest>>,
  res: HyphensResponse<RegistrationResponse>
) {

  try {
    registrationRequest.check(req.body);


    const data = await RegistrationService(req.body);
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