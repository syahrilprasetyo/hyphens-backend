import { Static } from "runtypes";
import { HyphensRequest, HyphensResponse } from "../config/rest_config";
import { loginRequest } from "./Request";
import { loginResponse } from "./Response";
import loginService from "./Service";

export default async function LoginController(
  req: HyphensRequest<Static<typeof loginRequest>>,
  res: HyphensResponse<loginResponse>
) {

  try {
    loginRequest.check(req.body);

    const data = await loginService(req.body);
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