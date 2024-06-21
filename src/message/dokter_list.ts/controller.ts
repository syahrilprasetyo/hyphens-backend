import { Static } from "runtypes";

import { HyphensRequest, HyphensResponse } from "../../config/rest_config";
import dokterListService from "./Service";
import { dokterListRequest } from "./Request";
import { dokterListResponse } from "./Response";


export default async function dokterListController(
  req: HyphensRequest<Static<typeof dokterListRequest>>,
  res: HyphensResponse<dokterListResponse>
) {

  try {
    dokterListRequest.check(req.body);

    const data = await dokterListService(req.body);
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