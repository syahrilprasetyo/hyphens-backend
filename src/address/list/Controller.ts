import { Static } from "runtypes";
import { AddressListRequest } from "./Request";
import {  AddressListResponse } from "./Response";
import AddressListService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";


export default async function AddressListController(
  req: HyphensRequest<Static<typeof AddressListRequest>>,
  res: HyphensResponse<AddressListResponse>
) {

  try {
    AddressListRequest.check(req.body);

    const data = await AddressListService(req.body);
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