import { Static } from "runtypes";
import { AddAddressRequest } from "./Request";
import {  AddAddressResponse } from "./Response";
import AddAddressService from "./Service";
import { HyphensRequest, HyphensResponse } from "../../config/rest_config";


export default async function AddAddressController(
  req: HyphensRequest<Static<typeof AddAddressRequest>>,
  res: HyphensResponse<AddAddressResponse>
) {

  try {
    AddAddressRequest.check(req.body);

    const data = await AddAddressService(req.body);
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