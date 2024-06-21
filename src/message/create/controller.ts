import { Static } from "runtypes";

import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import createMessagesService from "./Service";
import { createMessagesRequest } from "./Request";
import { createMessagesResponse } from "./Response";


export default async function createMessagesController(
  req: HyphensRequest<Static<typeof createMessagesRequest>>,
  res: HyphensResponse<createMessagesResponse>
) {

 

  try {
    createMessagesRequest.check(req.body);

    const data = await createMessagesService(req.body);
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