import { Static } from "runtypes";
import { showMessagesRequest } from "./Request";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import { showMessagesResponse } from "./Response";
import showMessagesService from "./Service";


export default async function showMessagesController(
  req: HyphensRequest<Static<typeof showMessagesRequest>>,
  res: HyphensResponse<showMessagesResponse>
) {

  try {
    showMessagesRequest.check(req.body);

    const data = await showMessagesService(req.body);
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