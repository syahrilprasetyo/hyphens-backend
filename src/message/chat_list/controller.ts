import { Static } from "runtypes";

import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import chatListService from "./Service";
import { chatListRequest } from "./Request";
import { chatListResponse } from "./Response";


export default async function chatListController(
  req: HyphensRequest<Static<typeof chatListRequest>>,
  res: HyphensResponse<chatListResponse>
) {

  try {
    chatListRequest.check(req.body);

    const data = await chatListService(req.body);
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