import { Static } from "runtypes";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";
import { loginDokterRequest } from "./Request";
import { loginDokterResponse } from "./Response";
import loginDokterService from "./Service";

export default async function LoginDokterController(
  req: HyphensRequest<Static<typeof loginDokterRequest>>,
  res: HyphensResponse<loginDokterResponse>
) {

  try {
    loginDokterRequest.check(req.body);

    const data = await loginDokterService(req.body);
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